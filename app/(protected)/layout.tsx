import Navbar from "./_components/Navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div  className="w-full h-full flex flex-col gap-y-10 items-center justify-center min-h-screen bg-gradient-to-tr from-sky-400 to-blue-800">
      <nav className="mt-10">
      <Navbar />
      </nav>
      {children}
    </div>
  );
};

export default ProtectedLayout;
