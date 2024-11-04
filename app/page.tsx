"use client";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service.</p>
        <div className="flex justify-center gap-4">
          {!session && (
            <>
              <LoginButton mode="modal" asChild>
                <Button variant="secondary" size="lg">
                  Sign-in
                </Button>
              </LoginButton>
            </>
          )}
          {session && (
            <>
              <Link href="/settings">
                <Button variant="secondary" size="lg">
                  Go to settings
                </Button>
              </Link>
            <Button variant="secondary" size="lg" onClick={() => signOut()}>
              Sign-out
            </Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
