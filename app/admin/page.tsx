"use client";

import { LoginPage } from "@/components/Login";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const page = () => {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.push("/blogs/new-blog");
  }
  return (
    <div className="w-full">
      <LoginPage />
    </div>
  );
};

export default page;
