"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const imageUrl = session?.user.image || "";

  console.log("mysession:", imageUrl);

  return (
    <nav className="bg-purple-500 p-4  fixed top-0 w-full z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-lg font-semibold">
            CourseApp
          </Link>
          {!session ? (
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
              <div className="flex flex-1 justify-end gap-10 items-center">
                <li className="text-purple-600 bg-purple-200 px-3 py-1 hover:bg-purple-300 ">
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className=""
                  >
                    Logout
                  </button>
                </li>

                <Image
                  className="inline-block h-[30px] w-[30px] rounded-full ring-2 ring-white"
                  src={imageUrl}
                  alt=""
                  width={30}
                  height={30}
                />
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
