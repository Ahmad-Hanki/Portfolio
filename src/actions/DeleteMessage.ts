"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const DeleteMessage = async (
  currentUserId: string,
  messageId: string,
  userId: string,
  email: string
) => {
  const admin = email === "itxti909@gmail.com";
  if (!admin) {
    if (!currentUserId || currentUserId !== userId) {
      return 0;
    }
  }

  try {
    if (!admin) {
      await prisma.guestBookEntry.delete({
        where: {
          id: messageId,
          userId: currentUserId,
        },
      });
    } else {
      await prisma.guestBookEntry.delete({
        where: {
          id: messageId,
        },
      });
    }

    revalidatePath("/guestbook");
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default DeleteMessage;
