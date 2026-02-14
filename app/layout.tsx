import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EtherealSearch - Agentic RAG for Engineering",
  description: "World-class vision analysis and agentic search for engineering companies. Analyze diagrams, blueprints, and technical documentation with AI-powered intelligence.",
  keywords: ["RAG", "engineering", "AI", "vision analysis", "diagram analysis", "agentic search"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
