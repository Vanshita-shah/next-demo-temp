"use client";

import Button from "@/components/form/Button";
import ErrorMsg from "@/components/form/ErrorMsg";
import SignInWithGoogle from "@/components/form/SignInWithGoogle";
import UserProfile from "@/components/form/UserProfile";
import { registerAction } from "@/lib/action";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useFormState } from "react-dom";

const Page = () => {
  const [state, formAction] = useFormState(registerAction, { message: "" });
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      console.log(session);

      router.replace("/dashboard");
    }
  }, [session, sessionStatus, router]);

  console.log(state);

  return (
    <div className="grid place-items-center h-screen">
      <div className="gap-3 shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form action={formAction} className="flex flex-col ">
          <label htmlFor="profile" className="mt-3">
            Profile <span>*</span>
            <span className="text-gray-400 text-sm">.png/.jpg/.jpeg</span>
          </label>
          <UserProfile />
          <label htmlFor="name" className="mt-3">
            Name <span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter name"
            required
          />
          {state.name && <ErrorMsg error={state.name} />}

          <label htmlFor="email" className="mt-3">
            Email <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            required
          />
          {state.email && <ErrorMsg error={state.email} />}
          <label htmlFor="password" className="mt-3">
            Password <span>*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            required
          />
          {state.password && <ErrorMsg error={state.password} />}

          {state.message && <ErrorMsg error={state.message} />}

          <Button text="register" />

          <SignInWithGoogle />

          <Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
