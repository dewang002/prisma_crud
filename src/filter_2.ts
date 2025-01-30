import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() =>{
    const filterUser = await prisma.user.findMany({
        take:1,
        skip:3
    })
    console.log(filterUser)
}

main()
.then(async()=>{
    console.log('paginated')
    await prisma.$disconnect()
})
.catch(async()=>{
    console.log("some thing went wrong wile creating post")
    await prisma.$disconnect()
    process.exit(1)
})