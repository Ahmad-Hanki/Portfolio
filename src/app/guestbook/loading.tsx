
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import LoadingSkeleton from "./_components/LoadingSkeleton";
import { GuestBookForm } from "./_components/GetGuestBookForm";

const GuestBookLoading = () => {
  return (
    <div>
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <h1 className="text-4xl font-semibold lg:text-5xl">GuestBook</h1>
        <p className="leading-7 text-muted-foreground mt-2">
          Sign My GuestBook!
        </p>

        <Card className="mt-10">
          <CardHeader className="flex flex-col w-full">
            <Label className="mb-1">Message</Label>

            <GuestBookForm />

            <LoadingSkeleton />
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default GuestBookLoading;
