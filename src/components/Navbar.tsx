"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  if (!session) return null;

  const role = session.user?.role;

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow border-b">
      <div className="text-xl font-bold text-blue-600">
        {role === "admin" ? "Admin Panel" : "User Dashboard"}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">
          {session.user?.name}
        </span>

        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        )}

        <button
          onClick={() =>
            signOut({
              callbackUrl: "http://localhost:3000/login",
            })
          }
          className="text-sm px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
