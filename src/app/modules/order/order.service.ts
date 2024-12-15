import Stripe from "stripe";
import { prisma } from "../../config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia",
});

const createOrderAndPaymentLink = async ({
  userId,
  shopId,
  items,
  paymentMethod,
}: {
  userId: string;
  shopId: string;
  items: { productId: string; quantity: number; price: number }[];
  paymentMethod: string;
}) => {
  // Calculate total price
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Validate shop and user existence
  await prisma.shop.findUniqueOrThrow({ where: { id: shopId } });
  await prisma.user.findUniqueOrThrow({ where: { id: userId } });

  // Create Order and Order Items
  const order = await prisma.order.create({
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
  console.log("order" , order);

  // Ensure CLIENT_URL is properly defined, use localhost as fallback if not defined
  const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';

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
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  // Save Transaction
  await prisma.transaction.create({
    data: {
      orderId: order.id,
      amount: totalPrice,
      paymentMethod,
      status: "PENDING",
      transactionId: session.id, // Using session ID for transaction
    },
  });

  return { paymentUrl: session.url }; // Return the Stripe Checkout URL
};

export const orderServices = {
  createOrderAndPaymentLink,
};
