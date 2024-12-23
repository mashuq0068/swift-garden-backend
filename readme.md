# Swift Garden Backend

Swift Garden Backend is a server-side application for the Swift Garden platform, which enables users to buy vegetables from various vendors. The backend supports features like user management, vendor and admin dashboards, order management, and more.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Setup Instructions](#setup-instructions)
- [Scripts](#scripts)
- [Usage](#usage)
- [Folder Details](#folder-details)
- [License](#license)

## Features

- **User Management**: Supports user authentication and authorization.
- **Vendor Dashboard**: Allows vendors to manage their products, inventory, and orders.
- **Admin Dashboard**: Provides features to monitor platform activity, manage vendors, and resolve disputes.
- **Product Management**: Vendors can add, update, and delete their products.
- **Order Management**: Customers can place orders, and vendors can process them.
- **Payment Integration**: Integrated with Stripe for secure payments.
- **Image Uploads**: Handles image uploads using Multer and Cloudinary.

## Technology Stack

- **Programming Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL (managed with Prisma ORM)
- **Authentication**: JSON Web Tokens (JWT)
- **File Storage**: Cloudinary
- **Dependencies**:
  - [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [express](https://www.npmjs.com/package/express)
  - [multer](https://www.npmjs.com/package/multer)
  - [stripe](https://www.npmjs.com/package/stripe)
  - [zod](https://www.npmjs.com/package/zod)

## Project Structure

```plaintext
swift-garden-backend
├── .env                 # Environment variables
├── .gitignore           # Git ignore file
├── dist                 # Compiled files
├── images               # Static image files
├── node_modules         # Node.js dependencies
├── prisma               # Prisma schema and migrations
│   ├── migrations       # Database migrations
│   └── schema.prisma    # Prisma schema definition
├── src                  # Source code
├── uploads              # Temporary file uploads
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel configuration
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
DATABASE_URL=your_postgresql_url
BCRYPT_SALT_ROUNDS=any_number
JWT_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=your_port_number
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/swift-garden-backend.git
   cd swift-garden-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup Prisma:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
4. Start the development server:
   ```bash
   npm run start:dev
   ```

## Scripts

- `npm run build`: Compile TypeScript files.
- `npm start`: Start the production server.
- `npm run start:dev`: Start the development server with live reload.
- `npm run start:prod`: Start the server in production mode.

## Usage

- Start the server and access the API at `http://localhost:<PORT>`.
- Use the vendor and admin dashboards to manage users and orders.

## Folder Details

- **dist**: Contains compiled JavaScript files.
- **images**: Stores static image files for the application.
- **prisma**:
  - `migrations`: Database migration scripts.
  - `schema.prisma`: Prisma schema file.
- **src**: Contains the source code for the backend.
- **uploads**: Temporary storage for uploaded files.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
