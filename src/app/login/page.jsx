"use client";

import {
  useState,
  useEffect,
} from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { loginUser } from "@/services/auth.service";

import { useAuth } from "@/hooks/useAuth";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import {
  Eye,
  EyeOff,
  GraduationCap,
} from "lucide-react";

import { FormField } from "@/utils/formFields";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email"),

  password: z
    .string()
    .min(
      3,
      "Minimum 3 characters"
    ),
});

export default function LoginPage() {
  const { user, login } =
    useAuth();

  const router = useRouter();

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    serverError,
    setServerError,
  ] = useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver:
      zodResolver(schema),
  });

  /* =========================
     REDIRECT IF LOGGED IN
  ========================= */

  useEffect(() => {
    if (!user) return;

    if (
      user.role === "teacher"
    ) {
      router.replace(
        "/teacher/dashboard"
      );
    }

    if (
      user.role ===
      "principal"
    ) {
      router.replace(
        "/principal/approvals"
      );
    }
  }, [user, router]);

  /* =========================
     LOGIN
  ========================= */

  const onSubmit = async (
    data
  ) => {
    try {
      setServerError("");

      const res =
        await loginUser(data);

      login(res);

      if (
        res.role ===
        "teacher"
      ) {
        router.push(
          "/teacher/dashboard"
        );
      } else {
        router.push(
          "/principal/approvals"
        );
      }
    } catch (err) {
      setServerError(
        err.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] flex items-center justify-center p-4">
      
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 grid lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-black text-white p-10 relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]" />

          <div className="relative">
            
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur">
              <GraduationCap className="w-7 h-7" />
            </div>

            <h1 className="text-4xl font-bold mt-8 leading-tight">
              Welcome Back
            </h1>

            <p className="text-gray-300 mt-4 max-w-sm leading-relaxed">
              Manage live sessions,
              approvals, and classroom
              content from one dashboard.
            </p>

          </div>

          <div className="relative flex items-center gap-3">
            
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
              ✓
            </div>

            <p className="text-sm text-gray-300">
              Secure role-based access
              for teachers & principals
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 sm:p-8 lg:p-10">
          
          <div className="max-w-md mx-auto">
            
            {/* HEADER */}
            <div className="mb-8">
              
              <h2 className="text-3xl font-bold text-gray-900">
                Login
              </h2>

              <p className="text-gray-500 mt-2">
                Enter your credentials to
                continue
              </p>

            </div>

            {/* SERVER ERROR */}
            {serverError && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {serverError}
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit(
                onSubmit
              )}
              className="space-y-5"
            >
              
              {/* EMAIL */}
              <FormField
                label="Email"
                error={
                  errors.email
                    ?.message
                }
              >
                <Input
                  {...register(
                    "email"
                  )}
                  placeholder="Enter email"
                  className={`
                    h-12
                    rounded-2xl
                    border-gray-200
                    shadow-sm
                    focus-visible:ring-2
                    focus-visible:ring-black/5
                    ${
                      errors.email
                        ? "border-red-300"
                        : ""
                    }
                  `}
                />
              </FormField>

              {/* PASSWORD */}
              <FormField
                label="Password"
                error={
                  errors.password
                    ?.message
                }
              >
                <div className="relative">
                  
                  <Input
                    {...register(
                      "password"
                    )}
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter password"
                    className={`
                      h-12
                      rounded-2xl
                      border-gray-200
                      shadow-sm
                      pr-12
                      focus-visible:ring-2
                      focus-visible:ring-black/5
                      ${
                        errors.password
                          ? "border-red-300"
                          : ""
                      }
                    `}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>

                </div>
              </FormField>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={
                  isSubmitting
                }
                className="w-full h-12 rounded-2xl bg-black text-white font-semibold hover:bg-black/90 transition-all disabled:opacity-50"
              >
                {isSubmitting
                  ? "Logging in..."
                  : "Login"}
              </button>

            </form>

            {/* DEMO ACCOUNTS */}
            <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-200 p-4">
              
              <p className="text-sm font-medium text-gray-900">
                Demo Accounts
              </p>

              <div className="mt-3 space-y-2 text-xs text-gray-600">
                
                <p>
                  Teacher:
                  teacher@test.com
                </p>

                <p>
                  Teacher:
                  science@test.com
                </p>

                <p>
                  Principal:
                  principal@test.com
                </p>

                <p>
                  Password: 123
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}