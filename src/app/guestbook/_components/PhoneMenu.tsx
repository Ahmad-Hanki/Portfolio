"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuVertical from "@/assets/MenuVertical";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Report from "@/assets/Report";
import { Close } from "@/assets/Close";
import DeleteDialog from "../DeleteDialog";
import toast from "react-hot-toast";
import DeleteMessage from "@/actions/DeleteMessage";
interface messageData {
  messageId: string;
  userId: string;
  currentUser: string;
}
const PhoneMenu = ({ messageId, userId, currentUser }: messageData) => {
  const [open, setOpen] = useState(false);

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
      <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
        <SheetTrigger>
          <Button variant={"outline"}>
            <MenuVertical />
          </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} className="py-7">
          <SheetHeader>
            {currentUser == userId && (
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
            )}

            <Button
              className="flex gap-3 w-fit font-extrabold text-red-400 hover:text-red-400"
              variant={"ghost"}
            >
              <Report className="w-5 h-5 font-extrabold " />
              Report
            </Button>
            <SheetClose>
              <Button className="flex gap-3 w-full font-extrabold ">
                <Close className="w-5 h-5 font-extrabold " type="submit" />
                Close
              </Button>
            </SheetClose>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PhoneMenu;
