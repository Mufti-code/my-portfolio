import "./globals.css";

export const metadata = {
  title: "Maulana Al Mufti | Full Stack Developer",
  description:
    "Portfolio Maulana Al Mufti - Full Stack Developer specializing in JavaScript, PHP, Python, Node.js, MySQL, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}