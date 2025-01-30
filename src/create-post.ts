import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const main = async()=>{
    await prisma.post.create({
        data:{ 
            title:"glory comes after",
            content:"",
            author:{
                connect:{
                    id:1
                }
            }
    }
    })
}

main()
.then(async()=>{
    console.log('post created')
    await prisma.$disconnect()
})
.catch(async()=>{
    console.log("some thing went wrong wile creating post")
    await prisma.$disconnect()
    process.exit(1)
})

