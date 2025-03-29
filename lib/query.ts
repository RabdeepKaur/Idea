import {Prisma , PrismaClient} from '@prisma/client'
const prisma= new PrismaClient();

export async function getprojects(search?: string) {
    return prisma.post.findMany({
      where: search ? {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { category: { contains: search, mode: 'insensitive' } },
          { author: { name: { contains: search, mode: 'insensitive' } } }
        ]
      } : {},
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          }
        }
      }
    })
  }
  export async function getprojectId(id: number) {
    return prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            githubUsername: true,
            avatarUrl: true,
          
          }
        }
          }
        });
      }
      export async function getAuthorById (authorId:number){
        return prisma.post.findUnique({
          where:{id:authorId},
            include: {
              author: true // This makes post.author available
            
          }
        })
      }
      