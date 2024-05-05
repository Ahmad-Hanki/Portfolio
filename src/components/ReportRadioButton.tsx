"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ReportRadioButton({ setData }: { setData: any }) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    setData(value);
    console.log(selectedValue);
  };


  return (
    <RadioGroup defaultValue={selectedValue} onValueChange={handleChange}>
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="hate" id="r1" />
          <Label className="font-extrabold" htmlFor="r1">
            Hate
          </Label>
        </div>
        <p className="font-light">
          Content with slurs, racist or sexist stereotypes, dehumanization, or
          hateful symbols helps combat hate online.
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="violent" id="r2" />
          <Label className="font-extrabold" htmlFor="r2">
            Violent Speech
          </Label>
        </div>
        <p className="font-light">
          Reporting content that promotes or encourages physical harm,
          aggression, or unlawful behavior towards others.
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="spam" id="r3" />
          <Label className="font-extrabold" htmlFor="r3">
            Spam
          </Label>
        </div>
        <p className="font-light">
          Unsolicited, irrelevant, or repetitive content that inundates
          communication channels, aiming to maintain the quality and integrity
          of online interactions.
        </p>
      </div>
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sensitive" id="r4" />
          <Label className="font-extrabold" htmlFor="r4">
            Sensitive Data
          </Label>
        </div>
        <p className="font-light">
          Content that contains personal or confidential data, such as financial
          details, private contact information, or medical records, to ensure
          user privacy and security.
        </p>
      </div>
      <input type="text" name="report" hidden defaultValue={selectedValue} />
    </RadioGroup>
  );
}
