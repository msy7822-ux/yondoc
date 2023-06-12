import { Header } from "./_components/common/header/header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <ClerkProvider>
        <head>
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body>
          <Header></Header>
          <div className="mx-auto w-full max-w-5xl lg:p-0 p-3">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
