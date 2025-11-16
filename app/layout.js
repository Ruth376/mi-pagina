import "./globals.css";
import RootClientLayout from "./RootClientLayout";

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de Ruth Rojas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <RootClientLayout>
          {children}
        </RootClientLayout>
      </body>
    </html>
  );
}
