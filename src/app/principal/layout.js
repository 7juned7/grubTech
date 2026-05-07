"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { Menu, X } from "lucide-react";
import ProtectedRoute from "@/protectedRoute";

export default function PrincipalLayout({ children }) {
  const { logout } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <ProtectedRoute role="principal">

    <div className="flex">
      
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between p-4 z-50">
        <h2 className="text-lg font-bold">Principal</h2>
        <button onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4 flex flex-col justify-between z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* Top */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Principal Panel</h2>

            {/* Close btn mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-3">
            <li
              className={
                pathname === "/principal/approvals"
                  ? "text-yellow-400"
                  : ""
              }
            >
              <Link href="/principal/approvals" onClick={() => setIsOpen(false)}>
                Content Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 md:ml-64 p-4 pt-20 md:pt-4 md:p-6 bg-gray-50 min-h-screen pt-16 md:pt-6">
        {children}
      </div>
    </div>
    </ProtectedRoute>
  );
}