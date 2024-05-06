"use client";
import { useState, useEffect } from "react";

const ConsoleComponent: React.FC = () => {
  const [text, setText] = useState<string[]>([
    "I am a Developer.",
    "I am a Designer.",
    "I am a Tester.",
    "I am a Debugger.",
    "I am a Programmer.",
  ]);
  const [colors, setColors] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(true);
  const [letterCount, setLetterCount] = useState<number>(1);
  const [x, setX] = useState<number>(1);
  const [waiting, setWaiting] = useState<boolean>(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setText((prevText) => {
          const shiftedText = [...prevText];
          const usedWord = shiftedText.shift();
          shiftedText.push(usedWord as string);
          return shiftedText;
        });
        setColors(generateRandomColors());
        setX(1);
        setLetterCount((prevLetterCount) => prevLetterCount + x);
        setWaiting(false);
      } else if (letterCount === text[0].length + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setX(-1);
          setLetterCount((prevLetterCount) => prevLetterCount + x);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount((prevLetterCount) => prevLetterCount + x);
      }
    }, 120);

    const interval2 = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [letterCount, text, waiting, x]);

  const generateRandomColors = () => {
    const randomColor = () => Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    return [rgbColor];
  };

  return (
    <div className="console-container">
      <span id="text" style={{ color: colors[0] }}>
        {text[0].substring(0, letterCount)}_
      </span>
    </div>
  );
};

export default ConsoleComponent;
