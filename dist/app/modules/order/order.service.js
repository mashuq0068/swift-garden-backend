"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const stripe_1 = __importDefault(require("stripe"));
const config_1 = require("../../config");
const queryBuilder_1 = __importDefault(require("../../builder/queryBuilder"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-11-20.acacia",
});
const createOrderAndPaymentLink = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, shopId, items, paymentMethod, }) {
    // Calculate total price
    const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    // Validate shop and user existence
    yield config_1.prisma.shop.findUniqueOrThrow({ where: { id: shopId } });
    yield config_1.prisma.user.findUniqueOrThrow({ where: { id: userId } });
    // Create Order and Order Items
    const order = yield config_1.prisma.order.create({
        data: {
            userId,
            shopId,
            totalPrice,
            OrderItem: {
                create: items.map((item) => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                })),
            },
        },
        include: { OrderItem: true },
    });
    console.log("order", order);
    // Ensure CLIENT_URL is properly defined, use localhost as fallback if not defined
    const clientUrl = process.env.CLIENT_URL || "https://swift-garden-frontned.vercel.app/";
    const line_items = items.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: `Product ${item.productId}`, // Adjust the name dynamically
            },
            unit_amount: item.price * 100, // Stripe requires price in cents
        },
        quantity: item.quantity,
    }));
    // Create Stripe Checkout Session
    const session = yield stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: "https://swift-garden-frontned.vercel.app/success",
        cancel_url: "https://swift-garden-frontned.vercel.app/cancel",
    });
    // Save Transaction
    yield config_1.prisma.transaction.create({
        data: {
            orderId: order.id,
            amount: totalPrice,
            paymentMethod,
            status: "PENDING",
            transactionId: session.id, // Using session ID for transaction
        },
    });
    return { paymentUrl: session.url }; // Return the Stripe Checkout URL
});
const getAllOrdersFromDB = (queryParams) => __awaiter(void 0, void 0, void 0, function* () {
    // Create an instance of QueryBuilder with query parameters
    const queryBuilder = new queryBuilder_1.default(queryParams);
    // Apply the necessary methods to build the query
    const prismaQuery = queryBuilder
        .addSearch(["name", "email"]) // Add search fields (adjust as needed)
        .addFilters() // Add filters from queryParams
        .addSort() // Add sorting if specified in queryParams
        .addPagination() // Add pagination logic if specified in queryParams
        .build(); // Build the final Prisma query
    console.log(prismaQuery);
    // Execute the Prisma query using the built query
    const result = yield config_1.prisma.order.findMany(prismaQuery);
    const meta = yield queryBuilder.countTotal(config_1.prisma.order);
    return {
        data: result,
        meta,
    };
});
exports.orderServices = {
    createOrderAndPaymentLink,
    getAllOrdersFromDB,
};
