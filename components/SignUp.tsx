"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { UserPlus } from "lucide-react";

export function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { signUp } = useAuth();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/auth/login");
    }
  }

  return (
    <div className="min-h-screen bg-[#20201e] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-[#faf5ff] rounded-lg shadow-2xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#f73444] rounded-lg flex items-center justify-center">
              <UserPlus size={28} className="text-[#faf5ff]" />
            </div>
          </div>

          <h1 className="text-[#20201e] text-3xl font-bold text-center mb-2">
            Create account
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Join us to start creating blogs
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup}>
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

            <div className="mb-5">
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

            <div className="mb-6">
              <label className="block text-[#20201e] text-sm font-medium mb-2">
                Confirm password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </form>

          <p className="text-[#20201e] text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/admin"
              className="text-[#f73444] hover:underline font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
