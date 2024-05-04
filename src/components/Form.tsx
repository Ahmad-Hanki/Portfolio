"use client";
import { useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {  Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please Wait
        </Button>}

      {!pending && <Button type="submit">Sign For Free</Button>}
    </>
  );
}

const Form = () => {
  return (
    <form className="flex justify-between gap-4 flex-col md:flex-row">
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
