import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function main() {
  console.log('Hello World')
  await prisma.$connect()
  console.log('Prisma Connected')
  // ...
  return true
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
