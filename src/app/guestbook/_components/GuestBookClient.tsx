"use client";

import { PaginationSection } from "@/components/paginationSection";
import Loading from "@/components/ui/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimeAgo from "@/lib/TimeAgo";
import { Suspense, useState } from "react";

type GuestBookClientProps = {
  data: {
    id: string;
    message: string;
    User: {
      firstname: string;
      profileImage: string | null;
    };
    createdAt: Date;
  }[];
};

const GuestBookClient = ({ data }: GuestBookClientProps) => {
  const [currentPage, setCurrentPage] = useState(1); // default
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  return (
    <div>
      <ul className="pt-7 gap-y-5 flex flex-col ">
        

          {currentItems.map((item, i) => {
            return (
              <li key={item.id}>
                <div className="flex items-center">
                  <Avatar className="rounded-lg">
                    <AvatarImage
                      src={item.User?.profileImage as string}
                      alt="@shadcn"
                    />
                    <AvatarFallback>
                      {item.User.firstname.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="pl-3 font-light ">
                      {<TimeAgo createdAt={item.createdAt} />}
                    </p>

                    <p className="text-muted-foreground pl-3 break-words">
                      {item.User.firstname}:{" "}
                      <span className="text-foreground">{item.message}</span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>

      <PaginationSection
        ItemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItem={data?.length}
      />
    </div>
  );
};

export default GuestBookClient;
