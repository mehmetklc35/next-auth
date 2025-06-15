import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ShieldCheck, UserCircle2 } from "lucide-react"; 

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (!session.user?.role) {
    redirect("/no-role");
  }

  const isAdmin = session.user.role === "admin";

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center transition-transform duration-300 hover:scale-[1.01]">
        <div className="flex justify-center mb-4">
          {isAdmin ? (
            <ShieldCheck className="w-14 h-14 text-blue-600" />
          ) : (
            <UserCircle2 className="w-14 h-14 text-green-500" />
          )}
        </div>

        <h1
          className={`text-2xl font-bold mb-2 ${
            isAdmin ? "text-blue-700" : "text-green-700"
          }`}
        >
          {isAdmin ? "Admin Panel" : "User Panel"}
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome, <strong>{session.user.name}</strong> 
        </p>

        <div className="text-sm text-gray-500">
          {isAdmin
            ? "You have full access to the system settings and management tools."
            : "You can explore the dashboard and access your user features."}
        </div>
      </div>
    </main>
  );
}
