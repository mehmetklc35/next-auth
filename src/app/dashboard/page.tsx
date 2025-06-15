import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  // Eğer sadece "admin" olanlar görebilsin istiyorsak:
  if (session.user.role !== "admin") {
    redirect("/unauthorized"); // böyle bir sayfa oluşturman gerekebilir
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">
        Welcome to your dashboard, {session.user?.name}
      </h1>
    </div>
  );
}
