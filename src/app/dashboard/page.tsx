"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
  if (session) {
    console.log("🧠 Session verisi:", session);
    console.log("🔐 Rol:", session.user?.role);
  }
}, [session]);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    window.location.href =
      "https://dev-hfhw8qe5c3z6nxie.us.auth0.com/v2/logout?client_id=fWEeUsP0LiX3i7zXpSs9PTt5lAaecJgd&returnTo=http://localhost:3000/login";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-6 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt="User Avatar"
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, {session?.user?.name || "User"}!
              </h1>
              <p className="text-sm text-gray-500">
                Logged in with role: <strong>{session?.user?.role}</strong>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow"
              onClick={() => alert("Profile page coming soon...")}
            >
              View Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-blue-600">12</h2>
            <p className="text-gray-600">Active Projects</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-600">5</h2>
            <p className="text-gray-600">Tasks Completed</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-3xl font-bold text-yellow-600">3</h2>
            <p className="text-gray-600">Upcoming Deadlines</p>
          </div>
        </div>
      </div>
    </main>
  );
}
