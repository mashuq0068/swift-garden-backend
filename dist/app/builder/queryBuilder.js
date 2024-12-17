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
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(queryParams) {
        this.queryParams = Object.fromEntries(Object.entries(queryParams).filter(([_, value]) => value));
        this.query = {
            where: {},
            orderBy: {},
            skip: 0,
            take: 10,
        };
    }
    // Method to handle dynamic search on specified fields
    addSearch(fields) {
        const { search } = this.queryParams;
        if (search && fields.length > 0) {
            this.query.where.OR = fields.map((field) => ({
                [field]: { contains: search, mode: "insensitive" },
            }));
        }
        return this;
    }
    addFilters() {
        const filters = this.queryParams.filters || {};
        if (filters.categories && filters.categories.length > 0) {
            this.query.where.categoryId = { in: filters.categories };
        }
        if (filters.minPrice) {
            this.query.where.price = Object.assign(Object.assign({}, this.query.where.price), { gte: parseFloat(filters.minPrice) });
        }
        if (filters.maxPrice) {
            this.query.where.price = Object.assign(Object.assign({}, this.query.where.price), { lte: parseFloat(filters.maxPrice) });
        }
        if (filters.shopId) {
            this.query.where.shopId = filters.shopId;
        }
        return this;
    }
    // Method to add sorting functionality
    addSort() {
        const { sort } = this.queryParams;
        if (sort) {
            const [field, direction] = sort.split(":"); // e.g., "createdAt:desc"
            this.query.orderBy = {
                [field]: direction || "asc",
            };
        }
        return this;
    }
    // Method to handle pagination
    addPagination() {
        const { page, limit } = this.queryParams;
        if (page && limit) {
            const pageNum = parseInt(page, 10);
            const size = parseInt(limit, 10);
            this.query.skip = pageNum * size;
            this.query.take = size;
        }
        return this;
    }
    // Method to build the complete Prisma query
    build() {
        return this.query;
    }
    // Method to count the total number of records based on the filters
    countTotal(prismaModel) {
        return __awaiter(this, void 0, void 0, function* () {
            const total = yield prismaModel.count({ where: this.query.where });
            const { page, limit: pageSize } = this.queryParams;
            const currentPage = parseInt(page || "0", 10);
            const limit = parseInt(pageSize || "10", 10);
            const totalPages = Math.ceil(total / limit);
            return {
                total,
                totalPages,
                limit,
                currentPage,
            };
        });
    }
}
exports.default = QueryBuilder;
