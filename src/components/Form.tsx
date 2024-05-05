"use client";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import postData from "@/actions/postData";
import { useRef } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      )}

      {!pending && <Button type="submit">Submit</Button>}
    </>
  );
}

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    const message = formData.get("message")?.toString();

    if (!message || message.length <= 0) {
      toast.error("Please fill the field");
      return;
    }

    const res = await postData(formData);
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
      <SubmitButton />
    </form>
  );
};

export default Form;
