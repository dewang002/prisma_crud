import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() =>{
    const user = await prisma.user.update({
        where:{
            id:1
        },
        data:{
            posts:{
                delete:{
                    id:2
                }
            }
        }
    })
}


main()
.then(async()=>{
    console.log('deleted')
    await prisma.$disconnect()
})
.catch(async()=>{
    console.log("some thing went wrong wile creating post")
    await prisma.$disconnect()
    process.exit(1)
})
