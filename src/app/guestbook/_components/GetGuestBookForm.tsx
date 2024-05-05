import Form from "@/components/Form";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GuestBookForm() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
  
    if (user) {
      return <Form />;
    }

}
  