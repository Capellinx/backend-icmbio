import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
   log: ["query"]
});

export async function connect() {
   await prisma.$connect();
}

export async function cleanup() {
   await prisma.$disconnect();
}

export default prisma;