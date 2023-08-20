import bcrypt from "bcrypt";
import { AllowedModel, AllowedPermission, Gender, PrismaClient, RoleType } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async () => {
  const count = await prisma.user.count();
  if (count > 0) return;

  await prisma.role.createMany({
    data: [
      { name: "Administrator", roleType: RoleType.ADMINISTRATOR },
      { name: "Student", roleType: RoleType.STUDENT },
      { name: "Prospective Student", roleType: RoleType.PROSPECTIVE },
      { name: "Referee", roleType: RoleType.REFEREE },
      { name: "Guest", roleType: RoleType.GUEST },
      { name: "Partner", roleType: RoleType.PARTNER },
      { name: "Alumni", roleType: RoleType.ALUMNI },
      { name: "Faculty", roleType: RoleType.FACULTY },
    ],
    skipDuplicates: true,
  });

  await prisma.role.create({
    data: {
      name: "Super Administrator",
      roleType: RoleType.SUPERUSER,
      allowedModels: [AllowedModel.ALL],
      permissions: {
        create: [{ modelType: AllowedModel.ALL, permissions: [AllowedPermission.ALL] }],
      },
      users: {
        create: [
          {
            email: "admin@adullam.ng",
            firstName: "Brown",
            lastName: "Onojeta",
            fullName: "Brown Onojeta",
            gender: Gender.MALE,
            passwordHash: await bcrypt.hash("1234", await bcrypt.genSalt(10)),
          },
        ],
      },
    },
  });
};

createUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
