const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-400 to-blue-800">{children}</div>
  );
};
export default AuthLayout;
