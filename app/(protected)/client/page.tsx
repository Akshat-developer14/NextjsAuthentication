"use client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { MonitorSmartphone } from "lucide-react";

const page = () => {
  const user = useCurrentUser();
  return (
    <UserInfo
    label={
      <span className="flex items-center gap-2">
        <MonitorSmartphone size={36} /> Client Component
      </span>
    }
    user={user}
    />
  );
};

export default page;
