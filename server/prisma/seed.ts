import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {
      email: 'admin@gmail.com',
      name: 'Admin',
    },
    create: {
      email: 'admin@gmail.com',
      name: 'Admin',
    },
  });
};

try {
  main();
} catch (error) {
  console.log(error);
  process.exit(1);
}
