"use client";
import { Input } from "./ui/input";

import toast from "react-hot-toast";
import { useRef } from "react";
import { SubmitButton } from "./SubmitButton";
import postMessage from "@/actions/postMessage";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

interface FormProps {
  user: KindeUser | null;
}

const Form = ({ user }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    const message = formData.get("message")?.toString();

    if (!message || message.length <= 0) {
      toast.error("Please fill the field");
      return;
    }

    const res = await postMessage(formData);
    if (res == 1) {
      toast.success("Message submitted successfully.");
      formRef.current?.reset();
    } else toast.error("Something went wrong.");
  };
  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex justify-between gap-4 flex-col md:flex-row"
    >
      <Input
        type="text"
        name="message"
        maxLength={80}
        minLength={1}
        placeholder="Your Message.."
        required
      />
      {user && <SubmitButton submit="Submit" submitting="Please Wait" />}
      {!user && (
        <LoginLink>
          <Button type="button">ٍSign in</Button>
        </LoginLink>
      )}
    </form>
  );
};

export default Form;
