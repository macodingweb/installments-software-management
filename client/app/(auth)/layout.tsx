export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-[100vh] bg-slate-200 flex items-center justify-center">
      {children}
    </main>
  );
}
