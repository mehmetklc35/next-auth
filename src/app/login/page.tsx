"use client";

import { signIn, useSession, signOut } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  const handleLogin = () => {
    signIn("auth0", {
      callbackUrl: "http://localhost:3000/dashboard",
    });
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    window.location.href = `https://dev-hfhw8qe5c3z6nxie.us.auth0.com/v2/logout?client_id=fWEeUsP0LiX3i7zXpSs9PTt5lAaecJgd&returnTo=http://localhost:3000/login`;
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
          <p className="text-lg opacity-90">
            Secure login to access your dashboard
          </p>
          <img
            src="https://illustrations.popsy.co/gray/work-from-home.svg"
            alt="Login Illustration"
            className="w-72 mx-auto mt-6"
          />
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-12 bg-white shadow-md">
        <div className="w-full max-w-md space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Sign in to your account
          </h2>

          {session ? (
            <>
              <p className="text-gray-600">Welcome, {session.user?.name} 🎉</p>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                Login with Auth0
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
