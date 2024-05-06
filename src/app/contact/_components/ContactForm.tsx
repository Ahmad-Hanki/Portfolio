"use client";
import { SubmitButton } from "@/components/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schame, ZodTypeProp } from "./Schema";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ZodTypeProp>({
    resolver: zodResolver(Schame()),
  });

  const isSubmitting = async (data: ZodTypeProp) => {
    setSubmitting(true);

    const res = await sendEmail(data);
    if (res == 1) {
      toast.success(data.name + "," + " your message was received");
      reset();
    } else {
      toast.success("Sadly, we could not receive your message");
    }
    setSubmitting(false);
  };
  return (
    <div className="text-secondary-foreground flex-1 ">
      <Card className="h-full space-y-6">
        <CardHeader>
          <CardTitle className="text-primary bg-primary/35 text-xl w-fit p-5 rounded-2xl">
            Ahmad Hanki
          </CardTitle>

          <h1 className="text-3xl ">Contact Me</h1>

          <CardDescription className="text-lg text-secondary-foreground/70">
            Leave me an E-mail
          </CardDescription>
        </CardHeader>
        <CardContent className="h-full">
          <form
            onSubmit={handleSubmit(isSubmitting)}
            className="w-full flex flex-col justify-start gap-6"
          >
            <div className="flex-1 flex flex-col md:flex-row justify-start gap-6">
              <div className="w-full">
                <Input
                  type="text"
                  id="name"
                  placeholder={"Your name"}
                  className="w-full"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-400 font-light">
                    Name must be at least 3 characters, at most 30.
                  </p>
                )}
              </div>

              <div className="w-full">
                <Input
                  id="subject"
                  type="text"
                  placeholder={"Subject"}
                  className="w-full"
                  {...register("subject")}
                />
                {errors.email && (
                  <p className="text-red-400 font-light">
                    {" "}
                    Subject must be at least 3 characters, at most 30.
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <Input
                id="email"
                type="text"
                placeholder={"Your E-mail"}
                className="w-full"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 font-light">Invalid email.</p>
              )}
            </div>
            <div className="flex-1">
              <Textarea
                id="message"
                className="w-full"
                {...register("message")}
                placeholder={"What is in your mind?"}
              />
              {errors.message && (
                <p className="text-red-400 font-light">
                  Message must be at least 10 characters, at most 200.
                </p>
              )}
            </div>
            <SubmitButton
              pen={submitting}
              submit="Send Message"
              submitting="Sending..."
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
