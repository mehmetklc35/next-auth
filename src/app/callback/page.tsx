"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AuthRedirectPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated" || !session?.user) return;

    const role = session.user.role;

    if (role === "admin") {
      router.replace("/admin");
    } else if (role === "user") {
      router.replace("/dashboard");
    }
  }, [status, session, router]);

  return (
    <main className="min-h-screen flex items-center justify-center text-lg text-gray-600">
      <div className="text-center">
        <p className="text-2xl font-semibold">Yönlendiriliyorsunuz...</p>
        <p className="text-gray-500 mt-2">
          Yetkinize göre sayfaya yönlendirileceksiniz.
        </p>
      </div>
    </main>
  );
}
