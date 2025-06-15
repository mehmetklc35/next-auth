"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center transition-transform duration-300 hover:scale-[1.01]">
        {session ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Welcome Back,
            </h1>
            <p className="text-xl text-blue-700 font-semibold mb-6">
              {session.user?.name || "User"}
            </p>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              Welcome to the Platform
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Please sign in with your Auth0 account
            </p>
            <button
              onClick={() =>
                signIn("auth0", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              <LogIn className="w-5 h-5" />
              Login with Auth0
            </button>
          </>
        )}
      </div>
    </main>
  );
}
