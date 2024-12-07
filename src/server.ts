import { faker } from "@faker-js/faker/.";
import app from "./app";
import config from "./app/config";
import { PrismaClient } from "@prisma/client";

async function main() {
  app.listen(config.port, () => {
    console.log(`app is running on port ${config.port}`);
  });
}

main();
