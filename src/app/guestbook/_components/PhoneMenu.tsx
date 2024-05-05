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
import { EyeOff, Trash2 } from "lucide-react";
import Report from "@/assets/Report";
import { Close } from "@/assets/Close";
import DeleteDialog from "./DeleteDialog";
import toast from "react-hot-toast";
import DeleteMessage from "@/actions/DeleteMessage";
import { ReportDialog } from "./ReportDialog";
import { useRouter } from "next/navigation";
interface messageData {
  messageId: string;
  userId: string;
  currentUser: string;
  email:string
}
const PhoneMenu = ({ messageId, userId, currentUser,email }: messageData) => {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const admin = email as string ==='itxti909@gmail.com';
  
  const handleDelete = async () => {
    const res = await DeleteMessage(currentUser, messageId, userId, email);
    if (res == 1) {
      toast.success("Deleted successfully");
    } else toast.error(" Something went wrong");
  };

  const handleReport = () => {
    localStorage.set(messageId, true);
    setIsReportDialogOpen(false);
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

            {currentUser != userId && admin && (
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

            {currentUser != userId && (
              <Button
                className="flex gap-3 w-fit font-extrabold"
                variant={"ghost"}
                onClick={() => {
                  localStorage.setItem(messageId, "true");
                  router.refresh();
                }}
              >
                <EyeOff className="w-5 h-5 font-extrabold " />
                Hide
              </Button>
            )}

            {currentUser != userId && (
              <Button
                className="flex gap-3 w-fit font-extrabold text-red-400 hover:text-red-400"
                variant={"ghost"}
                onClick={() => {
                  setIsReportDialogOpen(true);
                }}
              >
                <Report
                  className="w-5 h-5 font-extrabold "
                  onClick={() => setIsReportDialogOpen(true)}
                />
                Report
              </Button>
            )}

            <SheetClose>
              <Button
                className="flex gap-3 w-full font-extrabold "
                type="submit"
              >
                <Close className="w-5 h-5 font-extrabold " />
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
