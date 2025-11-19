"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { signIn } = useAuth();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/blogs/new-blog");
    }
  }

  return (
    <div className="min-h-screen bg-[#20201e] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-[#faf5ff] rounded-lg shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#f73444] rounded-lg flex items-center justify-center">
              <LogIn size={28} className="text-[#faf5ff]" />
            </div>
          </div>

          <h1 className="text-[#20201e] text-3xl font-bold text-center mb-2">
            Welcome back
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Sign in to create and manage your blogs
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label className="block text-[#20201e] text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#20201e] text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f73444] text-[#faf5ff] font-semibold py-2 rounded-lg hover:bg-[#d41234] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-[#20201e] text-center mt-6">
            Don't have an account?{" "}
            <Link
              href="/admin/sign-up"
              className="text-[#f73444] hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
