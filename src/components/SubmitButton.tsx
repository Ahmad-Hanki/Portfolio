"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
interface SubmitButtonProps {
  submit: string;
  submitting: string;
  pen?:boolean
}

export function SubmitButton({ submit, submitting, pen }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending || pen && (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {submitting}
        </Button>
      )}

      {!pending && !pen && <Button type="submit">{submit}</Button>}
    </>
  );
}
