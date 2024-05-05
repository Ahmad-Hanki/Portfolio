
import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import LoadingSkeleton from "./LoadingSkeleton";
import { Skeleton } from "@/components/ui/skeleton";


const GuestBookLoading = () => {
  return (
    <div>
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <Card className="mt-10">
          <CardHeader className="flex flex-col w-full">

            <LoadingSkeleton />
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default GuestBookLoading;
