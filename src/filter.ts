import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async() =>{
    const filterUser = await prisma.user.findMany({
        where:{
            email:{
                endsWith:"gmail.com"
            },
            posts:{
                some:{
                    title:"glory comes after"
                }
            }
        },
        include:{
            posts:{
                where:{
                    title:"glory comes after"
                }
            }
        }
    })
    console.log(JSON.stringify(filterUser))
}

main()
.then(async()=>{
    console.log('filtered')
    await prisma.$disconnect()
})
.catch(async()=>{
    console.log("some thing went wrong wile creating post")
    await prisma.$disconnect()
    process.exit(1)
})