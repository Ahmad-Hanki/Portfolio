"use client";
import { ReportRadioButton } from "@/components/ReportRadioButton";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

interface ReportDialogProps {
  isOpen: boolean;
  setIsOpen: any;
  onSubmit: () => void;
}

export function ReportDialog({
  isOpen,
  onSubmit,
  setIsOpen,
}: ReportDialogProps) {
  const [data, setData] = useState("");
  return (
    <form>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Why are you reporting this?</AlertDialogTitle>
            <AlertDialogDescription>
              If you see any of the following reasons, please take the step and
              report it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <ReportRadioButton setData={setData} />
          <AlertDialogFooter className="flex flex-col gap-3">
            <Button
              onClick={() => {
                if (data == "") {
                  toast("You need a reason to report");
                  return;
                }
                onSubmit();
              }}
              className="w-full bg-red-400"
              type="submit"
            >
              Report
            </Button>
            <Button
              className="w-full"
              type="submit"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
}
