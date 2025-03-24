
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create sample users with GitHub info
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      githubId: '12345678',
      githubUsername: 'demouser1',
      name: 'Demo User',
      avatarUrl: 'https://github.com/identicons/demouser1.png',
    }
  });

  const user2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      githubId: '87654321',
      githubUsername: 'demouser2',
      name: 'Test User',
      avatarUrl: 'https://github.com/identicons/demouser2.png',
    }
  });

  // Create sample posts
  await prisma.post.create({
    data: {
      title: 'Getting Started with Prisma',
      description: 'A beginner-friendly guide to using Prisma with Next.js',
      tags: ['prisma', 'nextjs', 'tutorial'],
      category: 'Technology',
      authorId: user1.id
    }
  });

  await prisma.post.create({
    data: {
      title: 'GitHub Authentication Best Practices',
      description: 'Learn how to implement secure GitHub authentication in your apps',
      tags: ['authentication', 'github', 'security'],
      category: 'Security',
      authorId: user2.id
    }
  });

  console.log('Database has been seeded with test data');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });