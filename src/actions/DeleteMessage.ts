'use server'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

const  DeleteMessage = async (currentUserId:string, messageId:string, userId:string) => {
    if (!currentUserId || currentUserId !== userId) {
        return;
    }

    try {
        await prisma.guestBookEntry.delete({
            where: {
                id: messageId,
                userId: currentUserId
            }
        })
        revalidatePath('/guestbook');
        return 1
    } catch(err) {
        console.log(err);
        return 0
    }
}

export default DeleteMessage