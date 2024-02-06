"use server";

import { z } from "zod";
import { zfd } from "zod-form-data";
import { base64Converter, logger } from "./fileReader";

const registerSchema = zfd.formData({
  name: zfd.text(z.string().min(2, "Too short").max(20, "Too long")),
  email: zfd.text(z.string().email("Invalid email format")),
  password: zfd.text(
    z.string().min(8, "Password must be at least 8 characters")
  ),
});

export const registerAction = async (
  prevState: object | { message: string },
  formData: FormData
) => {
  console.log(formData);

  const validatedFields = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    const errors: Record<string, string[]> =
      validatedFields.error.flatten().fieldErrors;

    // Convert errors object to the desired format
    const formattedErrors: Record<string, string> = {};
    for (const key in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, key)) {
        formattedErrors[key] = errors[key][0];
      }
    }

    return formattedErrors;
  }

  const profilepic = formData.get("profile") as File;

  const imageReader = profilepic.stream().getReader();
  const imageDataU8: number[] = [];

  while (true) {
    const { done, value } = await imageReader.read();
    if (done) break;

    imageDataU8.push(...value);
  }

  const imageBinary = Buffer.from(imageDataU8, "binary");
  console.log(imageBinary.toString());

  const body = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    image: imageBinary.toString(),
  };
  console.log(body);

  const res = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(data);

  if (res.status === 403) {
    return { message: "User Already Exists" };
  }

  return { message: "" };
};

// export const loginAction = async (
//   prevState: object | { message: string },
//   formData: FormData
// ) => {
//   const validatedFields = loginSchema.safeParse({
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (!validatedFields.success) {
//     const errors: Record<string, string[]> =
//       validatedFields.error.flatten().fieldErrors;

//     // Convert errors object to the desired format
//     const formattedErrors: Record<string, string> = {};
//     for (const key in errors) {
//       if (Object.prototype.hasOwnProperty.call(errors, key)) {
//         formattedErrors[key] = errors[key][0];
//       }
//     }

//     return formattedErrors;
//   }

//   const body = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };
//   console.log(body);

//   return { message: "" };
// }
