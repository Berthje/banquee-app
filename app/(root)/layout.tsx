import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Layton', lastName: 'Berth' };

  return (
    <main>
        <Sidebar user={loggedIn} />
        {children}
    </main>
  );
}
