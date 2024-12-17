import app from "./app";
import config, { prisma } from "./app/config";

async function main() {
  app.listen(config.port, () => {
    console.log(`app is running on port ${config.port}`);
  });
}

main();

