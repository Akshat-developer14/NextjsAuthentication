"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { defaultRedirectPath } from "@/routes";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const onClick = (provider: "google" | "github")=>{
    signIn(provider,{
      callbackUrl: callbackUrl || defaultRedirectPath
    })
  }
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => onClick("google")}>
        <FcGoogle className="h-8 w-8"/>
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => onClick("github")}>
        <FaGithub className="h-8 w-8"/>
      </Button>
    </div>
  );
};
