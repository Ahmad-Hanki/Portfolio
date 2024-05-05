"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import MenuVertical from "@/assets/MenuVertical";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, EyeOff } from "lucide-react";
import Report from "@/assets/Report";
import DeleteDialog from "./DeleteDialog";
import DeleteMessage from "@/actions/DeleteMessage";
import toast from "react-hot-toast";
import { ReportDialog } from "./ReportDialog";
import { useRouter } from "next/navigation";
interface messageData {
  messageId: string;
  userId: string;
  currentUser: string;
  email: string;
}

const Menu = ({ messageId, userId, currentUser, email }: messageData) => {
  const router = useRouter();
  const admin = email === "itxti909@gmail.com";
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const handleDelete = async () => {
    const res = await DeleteMessage(currentUser, messageId, userId, email);
    if (res == 1) {
      toast.success("Deleted successfully");
    } else toast.error(" Something went wrong");
  };

  const handleReport = () => {
    localStorage.setItem(messageId, "true");
    setIsReportDialogOpen(false);
    router.refresh();
    toast.success("Reported Successfully");
  };

  return (
    <div>
      <DeleteDialog
        iOpen={isDialogOpen}
        setOpenDialog={setDialogOpen}
        onSubmit={handleDelete}
      />
      <ReportDialog
        isOpen={isReportDialogOpen}
        setIsOpen={setIsReportDialogOpen}
        onSubmit={handleReport}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MenuVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="py-7 w-52">
          <DropdownMenuGroup>
            {currentUser == userId && (
              <DropdownMenuItem>
                <Button
                  className="flex gap-3 w-full font-extrabold"
                  variant={"ghost"}
                  onClick={() => {
                    setDialogOpen(true);
                  }}
                >
                  <Trash2 className="w-5 h-5 font-extrabold" />
                  Delete
                </Button>
              </DropdownMenuItem>
            )}

            {currentUser != userId && admin && (
              <DropdownMenuGroup>
                <Button
                  className="flex gap-3 w-full font-extrabold"
                  variant={"ghost"}
                  onClick={() => {
                    setDialogOpen(true);
                  }}
                >
                  <Trash2 className="w-5 h-5 font-extrabold" />
                  Delete
                </Button>
              </DropdownMenuGroup>
            )}

            {userId !== currentUser && (
              <DropdownMenuItem>
                <Button
                  className="flex gap-3 w-full font-extrabold"
                  variant={"ghost"}
                  onClick={() => {
                    localStorage.setItem(messageId, "true");
                    router.refresh();
                  }}
                >
                  <EyeOff className="w-5 h-5 font-extrabold " />
                  Hide
                </Button>
              </DropdownMenuItem>
            )}
            {userId !== currentUser && (
              <DropdownMenuItem>
                <Button
                  onClick={() => {
                    setIsReportDialogOpen(true);
                  }}
                  className="flex gap-3 w-full font-extrabold text-red-400 hover:text-red-400"
                  variant={"ghost"}
                >
                  <Report className="w-5 h-5 font-extrabold " />
                  Report
                </Button>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;
