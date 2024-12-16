import { IMeta } from "../utils/sendResponse";

export interface QueryParams {
  [key: string]: any;
  search?: string;
  sort?: string;
  page?: string;
  limit?: string;
}

interface PrismaQuery {
  where: Record<string, any>;
  orderBy: Record<string, "asc" | "desc">;
  skip: number;
  take: number;
}

class QueryBuilder {
  private queryParams: QueryParams;
  private query: PrismaQuery;

  constructor(queryParams: QueryParams) {
    this.queryParams = Object.fromEntries(
      Object.entries(queryParams).filter(([_, value]) => value)
    ) as QueryParams;
    this.query = {
      where: {},
      orderBy: {},
      skip: 0,
      take: 10,
    };
  }

  // Method to handle dynamic search on specified fields
  addSearch(fields: string[]): this {
    const { search } = this.queryParams;
    if (search && fields.length > 0) {
      this.query.where.OR = fields.map((field) => ({
        [field]: { contains: search, mode: "insensitive" },
      }));
    }
    return this;
  }

  addFilters(): this {
    const filters = this.queryParams.filters || {};

    if (filters.categories && filters.categories.length > 0) {
      this.query.where.categoryId = { in: filters.categories };
    }

    if (filters.minPrice) {
      this.query.where.price = {
        ...this.query.where.price,
        gte: parseFloat(filters.minPrice),
      };
    }
    if (filters.maxPrice) {
      this.query.where.price = {
        ...this.query.where.price,
        lte: parseFloat(filters.maxPrice),
      };
    }
    if (filters.shopId) {
      this.query.where.shopId = filters.shopId;
    }

    return this;
  }

  // Method to add sorting functionality
  addSort(): this {
    const { sort } = this.queryParams;
    if (sort) {
      const [field, direction] = sort.split(":"); // e.g., "createdAt:desc"
      this.query.orderBy = {
        [field]: (direction as "asc" | "desc") || "asc",
      };
    }
    return this;
  }

  // Method to handle pagination
  addPagination(): this {
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
  build(): PrismaQuery {
    return this.query;
  }

  // Method to count the total number of records based on the filters
  async countTotal(prismaModel: any): Promise<IMeta> {
    const total = await prismaModel.count({ where: this.query.where });
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
  }
}

export default QueryBuilder;
