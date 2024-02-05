"use client";

import Button from "@/components/form/Button";
import SignInWithGoogle from "@/components/form/SignInWithGoogle";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      console.log(session);

      router.replace("/dashboard");
    }
  }, [session, sessionStatus, router]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(email, password);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log(res?.error);

    if (res?.error) {
      setError("Invalid email or password");
      console.log(res);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="gap-3 shadow-lg p-5 rounded-lg border-t-4 border-purple-400">
        <h1 className="text-xl font-bold my-4">login</h1>
        <form onSubmit={handleLogin} className="flex flex-col ">
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
          {/* {state.email && <ErrorMsg error={state.email} />} */}
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
          {/* {state.password && <ErrorMsg error={state.password} />} */}

          {/* {state.message && <ErrorMsg error={state.message} />} */}

          <Button text={"Login"} />

          <SignInWithGoogle />

          <Link className="text-sm mt-3 text-right" href={"/register"}>
            Dont have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Page;
