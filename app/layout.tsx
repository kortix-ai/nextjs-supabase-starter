import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/lib/providers/query-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next.js Supabase Starter",
  description: "AI-friendly Next.js starter with Supabase and React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
(function() {
  if (window.__consoleCaptureInstalled || window === window.top) return;
  window.__consoleCaptureInstalled = true;
  ['log','warn','error','info','debug'].forEach(function(m) {
    var orig = console[m];
    console[m] = function() {
      orig.apply(console, arguments);
      try {
        window.parent.postMessage({
          type: 'console', method: m,
          args: [].slice.call(arguments).map(function(a) {
            return typeof a === 'object' ? JSON.stringify(a) : String(a);
          })
        }, '*');
      } catch(e) {}
    };
  });
  window.onerror = function(m,s,l,c,e) {
    window.parent.postMessage({type:'console',method:'error',args:['Uncaught: '+(e?.stack||m)]}, '*');
  };
})();
`}} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
