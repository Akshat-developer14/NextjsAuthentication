import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import { Server } from "lucide-react";

const ServerPage = async () => {
  const user = await currentUser();
  return (
    <UserInfo
      label={
        <span className="flex items-center gap-2">
          <Server size={36} /> Server Component
        </span>
      }
      user={user}
    />
  );
};

export default ServerPage;
