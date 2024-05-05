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
import { Trash2 } from "lucide-react";
import Report from "@/assets/Report";
import DeleteDialog from "../DeleteDialog";
import DeleteMessage from "@/actions/DeleteMessage";
import toast from "react-hot-toast";
interface messageData {
  messageId: string;
  userId: string;
  currentUser: string;
}

const Menu = ({ messageId, userId, currentUser }: messageData) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async () => {
    const res = await DeleteMessage(currentUser, messageId, userId);
    if (res == 1) {
      toast.success("Deleted successfully");
    } else toast.error(" Something went wrong");
  };
  return (
    <div>
      <DeleteDialog
        iOpen={isDialogOpen}
        setOpenDialog={setDialogOpen}
        onSubmit={handleDelete}
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
                  className="flex gap-3 w-fit font-extrabold"
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

            <DropdownMenuItem>
              <Button
                className="flex gap-3 w-fit font-extrabold text-red-400 hover:text-red-400"
                variant={"ghost"}
              >
                <Report className="w-5 h-5 font-extrabold " />
                Report
              </Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;
