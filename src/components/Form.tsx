"use client";
import { Input } from "./ui/input";

import toast from "react-hot-toast";
import { useRef } from "react";
import { SubmitButton } from "./SubmitButton";
import postMessage from "@/actions/postMessage";

const Form = () => {
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
      <SubmitButton submit="Submit" submitting="Please Wait" />
    </form>
  );
};

export default Form;
