import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">Welcome, Admin 👑</h1>
    </main>
  );
}
