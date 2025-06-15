"use client";

import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default function ForceLoginPage() {
  useEffect(() => {
    signIn("auth0", {
      callbackUrl: "http://localhost:3000/callback",
      prompt: "login",
    });
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
      Redirecting to login screen...
    </main>
  );
}
