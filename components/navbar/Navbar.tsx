"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  console.log(session);

  return (
    <nav className="bg-purple-500 p-4  fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-semibold">
            CourseApp
          </Link>
          {!session.data ? (
            <>
            <div className="flex flex-1 justify-end gap-10">

              <Link href="/login" className="text-white hover:underline">
                <li>Login</li>
              </Link>
              <Link href="/register" className="text-white hover:underline">
                <li>Register</li>
              </Link>
            </div>
            </>
          ) : (
            <>
              {/* {session.data.user?.email} */}
              <div className="flex flex-1 justify-end">
              <li className="text-white hover:border-b-2">
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className=""
                >
                  Logout
                </button>
              </li>

              </div>
            </>
          )}
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
