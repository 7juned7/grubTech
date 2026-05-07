"use client";

import Link from "next/link";

import {
  useContext,
  useState,
} from "react";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import {
  Menu,
  X,
  GraduationCap,
} from "lucide-react";

import { AuthContext } from "@/context/AuthContext";

import ProtectedRoute from "@/protectedRoute";

import { Button } from "@/components/ui/button";

export default function TeacherLayout({
  children,
}) {

  const { logout } =
    useContext(AuthContext);

  const router = useRouter();

  const pathname =
    usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const handleLogout = () => {
    logout();

    router.push("/login");
  };

  const navItems = [
    {
      label: "Dashboard",
      href:
        "/teacher/dashboard",
    },

    {
      label: "Upload",
      href:
        "/teacher/upload",
    },

    {
      label: "My Content",
      href:
        "/teacher/content",
    },
  ];

  return (
    <ProtectedRoute role="teacher">

      <div className="min-h-screen bg-gray-50">

        {/* =========================
            MOBILE TOPBAR
        ========================= */}

        <header
          className="
            md:hidden
            fixed top-0 left-0 right-0
            h-16
            bg-white/90
            backdrop-blur-xl
            border-b
            z-50
          "
        >

          <div
            className="
              h-full
              px-4
              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              <div
                className="
                  size-9
                  rounded-xl
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <GraduationCap
                  size={18}
                />
              </div>

              <div>

                <h2
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  Teacher
                </h2>

                <p
                  className="
                    text-xs
                    text-muted-foreground
                  "
                >
                  Dashboard
                </p>

              </div>

            </div>

            <Button
              size="icon"
              variant="ghost"
              className="
                cursor-pointer
              "
              onClick={() =>
                setIsOpen(true)
              }
            >
              <Menu size={22} />
            </Button>

          </div>

        </header>

        {/* =========================
            MOBILE OVERLAY
        ========================= */}

        {isOpen && (
          <div
            className="
              fixed inset-0
              bg-black/50
              backdrop-blur-sm
              z-40
              md:hidden
            "
            onClick={() =>
              setIsOpen(false)
            }
          />
        )}

        {/* =========================
            SIDEBAR
        ========================= */}

        <aside
          className={`
            fixed
            top-0
            left-0
            h-screen
            w-[280px]
            bg-white
            border-r
            z-50
            flex
            flex-col
            justify-between
            transition-transform
            duration-300
            ease-out
            shadow-xl

            ${
              isOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }

            md:translate-x-0
          `}
        >

          {/* Top */}
          <div>

            {/* Logo */}
            <div
              className="
                h-16
                px-5
                border-b
                flex
                items-center
                justify-between
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    size-10
                    rounded-2xl
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <GraduationCap
                    size={20}
                  />
                </div>

                <div>

                  <h2
                    className="
                      text-base
                      font-semibold
                    "
                  >
                    Teacher Panel
                  </h2>

                  <p
                    className="
                      text-xs
                      text-muted-foreground
                    "
                  >
                    EduFlow
                  </p>

                </div>

              </div>

              {/* Close Mobile */}
              <Button
                size="icon"
                variant="ghost"
                className="
                  md:hidden
                  cursor-pointer
                "
                onClick={() =>
                  setIsOpen(false)
                }
              >
                <X size={20} />
              </Button>

            </div>

            {/* Navigation */}
            <nav className="p-4">

              <ul className="space-y-2">

                {navItems.map(
                  (item) => {

                    const isActive =
                      pathname ===
                      item.href;

                    return (
                      <li
                        key={
                          item.href
                        }
                      >

                        <Link
                          href={
                            item.href
                          }
                          onClick={() =>
                            setIsOpen(
                              false
                            )
                          }
                          className={`
                            flex
                            items-center
                            rounded-2xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            transition-all
                            duration-300

                            ${
                              isActive
                                ? `
                                  bg-black
                                  text-white
                                  shadow-lg
                                `
                                : `
                                  text-gray-600
                                  hover:bg-gray-100
                                `
                            }
                          `}
                        >
                          {
                            item.label
                          }
                        </Link>

                      </li>
                    );
                  }
                )}

              </ul>

            </nav>

          </div>

          {/* Bottom */}
          <div className="p-4 border-t">

            <Button
              onClick={
                handleLogout
              }
              variant="destructive"
              size="lg"
              className="
                w-full
                rounded-2xl
                cursor-pointer
                font-medium
              "
            >
              Logout
            </Button>

          </div>

        </aside>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <main
          className="
            md:ml-[280px]
            min-h-screen
            pt-20
            md:pt-6
            p-4
            sm:p-5
            md:p-6
          "
        >
          {children}
        </main>

      </div>

    </ProtectedRoute>
  );
}