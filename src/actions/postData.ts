'use server'

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

const postData = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("UnAuthorized");
  }

  const message = formData.get("message")?.toString();
  if (!message) return null;

  try {
    const data = await prisma.guestBookEntry.create({
        data: {
          userId: user.id,
          message,
        },
      });

    revalidatePath('/guestbook');
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }

  
};

export default postData;
