"use client";

let imgString = "";

export const base64Converter = (profilepic: File) => {
  const reader = new FileReader();
  reader.onload = () => {
    imgString = reader.result as string;

    console.log(imgString);
  };
  reader.readAsDataURL(profilepic);
};

export const logger = () => {
  console.log("****************************************");

  console.log("hello i am logger");
  console.log("****************************************");
};
