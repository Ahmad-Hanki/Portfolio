import prisma from "@/lib/db";
import GuestBookClient from "./GuestBookClient";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const GetGuestBookEntry = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = await prisma.guestBookEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
      userId: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  await prisma.$disconnect();

  if (data.length == 0) return null;

  return <GuestBookClient data={data} user={user} />;
};

export default GetGuestBookEntry;
