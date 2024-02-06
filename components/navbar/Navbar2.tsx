"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const authenticatedLinks = [
  {
    id: 1,
    link: "dashboard",
  },
  {
    id: 2,
    link: "my-courses",
  },
  {
    id: 3,
    link: "add-course",
  },
];
const unauthentictedLinks = [
  {
    id: 1,
    link: "login",
  },
  {
    id: 2,
    link: "register",
  },
];

const Navbar2 = () => {
  const { data: session, status: sessionStatus } = useSession();
  const imageUrl = session?.user.image || "";
  const [nav, setNav] = useState(false);

  const links = session ? authenticatedLinks : unauthentictedLinks;

  return (
    <div className="flex justify-between items-center h-[4rem] px-10 bg-purple-500 nav fixed top-0 w-full z-10">
      <div>
        <Link href="/" className="text-white text-lg font-semibold">
          CourseApp
        </Link>
      </div>

      <div className="hidden md:flex md:items-center">
        {sessionStatus !== "loading" &&
          links.map(({ id, link }) => (
            <Link
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:underline hover:text-white duration-200"
              href={link}
            >
              {link}
            </Link>
          ))}

        {session && (
          <div className="flex flex-1 justify-end gap-10 items-center">
            <button
              className="text-purple-600 bg-purple-200 px-3 py-1 hover:bg-purple-300 "
              onClick={async () => {
                await signOut();
              }}
            >
              Logout
            </button>
            <Image
              className=" h-[30px] w-[30px] rounded-full ring-2 ring-white"
              src={imageUrl}
              alt=""
              width={30}
              height={30}
            />
          </div>
        )}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {nav ? (
          <FaTimes className="text-black" size={30} />
        ) : (
          <FaBars className=" text-white" size={30} />
        )}
      </div>

      {nav && (
        <div className="grid place-content-center absolute top-0 left-0 w-full h-screen bg-gray-100">
          <div className="flex  flex-col justify-center items-center">
            {session && (
              <Image
                className=" h-[80px] w-[80px] rounded-full ring-2 ring-white"
                src={imageUrl}
                alt=""
                width={30}
                height={30}
              />
            )}
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
            {session && (
              <button
                className="py-6 text-4xl w-full"
                onClick={async () => {
                  await signOut();
                }}
              >
                Logout
              </button>
            )}

            {/* {!session ? (
              <>
                <div className="flex flex-1 justify-end gap-10">
                  <Link href="/login" className="text-white hover:underline">
                    Login
                  </Link>
                  <Link href="/register" className="text-white hover:underline">
                    Register
                  </Link>
                </div>
              </>
            ) : (
              <>
                {links.map(({ id, link }) => (
                  <Link
                    key={id}
                    className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:underline hover:text-white duration-200"
                    href={link}
                  >
                    {link}
                  </Link>
                ))}
                <div className="flex flex-1 justify-end gap-10 items-center">
                  <button
                    className="text-purple-600 bg-purple-200 px-3 py-1 hover:bg-purple-300 "
                    onClick={async () => {
                      await signOut();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;