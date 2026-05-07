// components/common/ProtectedRoute.jsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
  role,
}) {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    // wait until auth loads
    if (user === undefined) return;

    // no user
    if (!user) {
      router.replace("/login");
      return;
    }

    // wrong role
    if (
      role &&
      user.role !== role
    ) {
      router.replace("/login");
    }
  }, [user, role, router]);

  // loading state
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb]">
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // blocked
  if (
    !user ||
    (role &&
      user.role !== role)
  ) {
    return null;
  }

  return children;
}