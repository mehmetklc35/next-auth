"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="w-full h-screen flex">
      {/* Left side - full height image */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/hero-login.avif" // 👈 Buraya görselini koy
          alt="Auth Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - text area */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white text-center px-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome!</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-md">
          Login securely with your Auth0 account to access your dashboard.
        </p>
        <button
          onClick={() =>
            signIn("auth0", {
              callbackUrl: "http://localhost:3000/callback",
              prompt: "login",
            })
          }
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Login with Auth0
        </button>
      </div>
    </main>
  );
}
