"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/callback");
    }
  }, [status, router]);

  const handleLogin = () => {
    const logoutUrl =
      "https://dev-hfhw8qe5c3z6nxie.us.auth0.com/v2/logout?client_id=fWEeUsP0LiX3i7zXpSs9PTt5lAaecJgd&returnTo=http://localhost:3000/force-login";

    window.location.href = logoutUrl;
  };

  return (
    <main className="w-full h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-64 md:h-full relative">
        <Image
          src="/hero-login.avif"
          alt="Auth Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center bg-white text-center px-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome!</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-md">
          Login securely with your Auth0 account to access your dashboard.
        </p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
        >
          Login with Auth0
        </button>
      </div>
    </main>
  );
}
