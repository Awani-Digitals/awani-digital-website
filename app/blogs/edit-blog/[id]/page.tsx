"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
// import UploadBlog from "@/components/UploadBlog";
import NewBlog from "../../new-blog/page";

const page = ({ params }: { params: { id: string } }) => {
  const { user, signOut } = useAuth();
  const { id } = params;
  const router = useRouter();
  console.log("Managing blog with id:", id);
  // useEffect(() => {
  //   if (!user) {
  //     router.push("/admin");
  //   }
  // });
  return (
    <div className="w-full grid place-items-center ">
      <NewBlog id={id} />
    </div>
  );
};

export default page;
