"use client";

import { PaginationSection } from "@/components/paginationSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimeAgo from "@/lib/TimeAgo";
import { useEffect, useState } from "react";
import PhoneMenu from "./PhoneMenu";
import Menu from "./Menu";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import GuestBookLoading from "./DataLoading";

type GuestBookClientProps = {
  data: {
    id: string;
    userId: string;
    message: string;
    User: {
      firstname: string;
      profileImage: string | null;
    };
    createdAt: Date;
  }[];
  user: KindeUser | null;
};

const GuestBookClient = ({ data, user }: GuestBookClientProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // default
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItems = data.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <GuestBookLoading/>;
  }

  return (
    <div>
      <ul className="pt-7 gap-y-5 flex flex-col ">
        {currentItems.map((item, i) => {
          const reporterOrHidden = localStorage.getItem(item.id) || undefined;
          if (reporterOrHidden == "true") return null;
          return (
            <li key={item.id}>
              <div className="flex justify-between items-center">
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

                {user && (
                  <>
                    <div className="lg:hidden">
                      <PhoneMenu
                        messageId={item.id}
                        userId={item.userId}
                        currentUser={user?.id}
                        email={user.email ?? ""}
                      />
                    </div>
                    <div className="hidden lg:block">
                      <Menu
                        messageId={item.id}
                        userId={item.userId}
                        currentUser={user?.id}
                        email={user.email ?? ""}
                      />
                    </div>
                  </>
                )}
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
