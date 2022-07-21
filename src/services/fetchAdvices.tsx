import { SetStateAction } from "react";

export const handleRandomButton = (
  setRandomButton: {
    (value: SetStateAction<boolean>): void;
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  },
  setInfo: {
    (value: SetStateAction<{ advice: string; id: number }>): void;
    (value: SetStateAction<{ advice: string; id: number }>): void;
    (arg0: any): void;
  }
) => {
  setRandomButton(true);
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        setInfo(data.slip);
        setRandomButton(false);
      }, 1000);
    });
};
