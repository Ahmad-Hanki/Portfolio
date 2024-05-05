import prisma from "@/lib/db";
import GuestBookClient from "./GuestBookClient";
import { Suspense } from "react";

const GetGuestBookEntry = async () => {
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
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (data.length == 0) return null;

  return (
      <GuestBookClient data={data} />
   
  );
};

export default GetGuestBookEntry;
