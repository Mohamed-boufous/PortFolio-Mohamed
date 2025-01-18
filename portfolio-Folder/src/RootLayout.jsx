import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main> {/* Utilisation correcte de children */}
        <Toaster /> {/* Le composant Toaster est rendu ici */}
      </body>
    </html>
  );
}