"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
interface SubmitButtonProps {
  submit: string;
  submitting: string;
}

export function SubmitButton({ submit, submitting }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {submitting}
        </Button>
      )}

      {!pending && <Button type="submit">{submit}</Button>}
    </>
  );
}
