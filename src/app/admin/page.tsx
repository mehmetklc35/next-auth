import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default async function AdminPage() {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />

      <main className="p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <ul className="space-y-2">
            <li className="border p-2 rounded">mehmetkilic35@gmail.com (user)</li>
            <li className="border p-2 rounded">admin@example.com (admin)</li>
            <li className="border p-2 rounded">test@demo.com (user)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
