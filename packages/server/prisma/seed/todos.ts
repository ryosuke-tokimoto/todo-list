import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Todo 1: Angular project
  const todo1 = await prisma.todo.upsert({
    where: { id: 1 },
    update: {
      title: 'Learn Angular fundamentals',
      status: 'NEW',
      description: 'Study Angular component architecture and data binding',
    },
    create: {
      title: 'Learn Angular fundamentals',
      status: 'NEW',
      description: 'Study Angular component architecture and data binding',
    },
  });

  // Todo 2: NestJS project
  const todo2 = await prisma.todo.upsert({
    where: { id: 2 },
    update: {
      title: 'Build REST API with NestJS',
      status: 'PROGRESS',
      description: 'Create controllers, services and implement proper error handling',
    },
    create: {
      title: 'Build REST API with NestJS',
      status: 'PROGRESS',
      description: 'Create controllers, services and implement proper error handling',
    },
  });

  // Todo 3: TypeScript learning
  const todo3 = await prisma.todo.upsert({
    where: { id: 3 },
    update: {
      title: 'Master TypeScript advanced types',
      status: 'NEW',
      description: 'Learn about generics, utility types, and conditional types',
    },
    create: {
      title: 'Master TypeScript advanced types',
      status: 'NEW',
      description: 'Learn about generics, utility types, and conditional types',
    },
  });

  // Todo 4: Testing
  const todo4 = await prisma.todo.upsert({
    where: { id: 4 },
    update: {
      title: 'Write unit tests for Angular components',
      status: 'NEW',
      description: 'Use TestBed and Jest to cover critical components with tests',
    },
    create: {
      title: 'Write unit tests for Angular components',
      status: 'NEW',
      description: 'Use TestBed and Jest to cover critical components with tests',
    },
  });

  // Todo 5: Deploy application
  const todo5 = await prisma.todo.upsert({
    where: { id: 5 },
    update: {
      title: 'Set up CI/CD pipeline for the project',
      status: 'COMPLETED',
      description: 'Configure GitHub Actions to build, test and deploy the application',
    },
    create: {
      title: 'Set up CI/CD pipeline for the project',
      status: 'COMPLETED',
      description: 'Configure GitHub Actions to build, test and deploy the application',
    },
  });

  console.log('Created todos:', {
    todo1,
    todo2,
    todo3,
    todo4,
    todo5,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
