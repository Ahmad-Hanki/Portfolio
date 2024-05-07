import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React, { Suspense } from "react";
import GetGuestBookEntry from "./_components/GetGuestBookEntry";
import { GuestBookForm } from "./_components/GetGuestBookForm";
import GuestBookLoading from "./_components/DataLoading";
import FormLoading from "./_components/FormLoading";
import { unstable_noStore as noStore } from "next/cache";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GuestBook",
  description: "Leave me something that makes me happy",
};


const GuestBookPage = () => {
  noStore();
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl">GuestBook</h1>
      <p className="leading-7 text-muted-foreground mt-2">Sign My GuestBook!</p>

      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full">
          <Label className="mb-1">Message</Label>

          <Suspense fallback={<FormLoading />}>
            <GuestBookForm />
          </Suspense>

          <Suspense fallback={<GuestBookLoading />}>
            <GetGuestBookEntry />
          </Suspense>
        </CardHeader>
      </Card>
    </section>
  );
};

export default GuestBookPage;
