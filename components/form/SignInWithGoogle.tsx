"use client";

import { signIn } from "next-auth/react";

const SignInWithGoogle = () => {
  return (
    <button
      className="mt-4 bg-gray-100  px-2 py-2"
      onClick={() => signIn("google")}
    >
      Login with Google
    </button>
  );
};

export default SignInWithGoogle;