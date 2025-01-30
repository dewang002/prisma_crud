import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const main=async()=>{
    const user = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:{
                where:{
                    id:1
                }
            }
        }
    })
    console.log(user)
}

main()
.then(async()=>{
    console.log("found")
    await prisma.$disconnect()
})
.catch(async()=>{
    console.log("error finding users")
    await prisma.$disconnect()
    process.exit(1)
})