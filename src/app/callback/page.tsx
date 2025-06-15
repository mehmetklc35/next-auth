// app/auth/callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AuthRedirectPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    const role = session?.user?.role;

    if (role === "admin") {
      router.replace("/admin");
    } else if (role === "user") {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [status, session, router]);

  return (
    <main className="min-h-screen flex items-center justify-center text-lg text-gray-600">
      Redirecting based on your role...
    </main>
  );
}
