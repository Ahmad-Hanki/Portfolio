import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FormLoading = () => {
  return (
   
      <div className="w-full ">
        <Skeleton className="h-10 rounded-lg w-full"></Skeleton>
      </div>
  );
};

export default FormLoading;
