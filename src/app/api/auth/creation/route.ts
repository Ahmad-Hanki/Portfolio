import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user == null || !user.id) {
    return NextResponse.redirect(
      "https://portfolio-nine-blue-24.vercel.app/guestbook"
    );
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
  //   await prisma.$disconnect();

  if (!dbUser) {
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.email ?? "",
        firstname: user.given_name ?? "",
        lastname: user.family_name ?? "",
        profileImage: user.picture,
      },
    });
  }
  //   await prisma.$disconnect();

  return NextResponse.redirect(
    "https://portfolio-nine-blue-24.vercel.app/guestbook"
  );
}
