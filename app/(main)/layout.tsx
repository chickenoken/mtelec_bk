import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { StyledEngineProvider } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "./_component/navbar/Navbar";
import Footer from "./_component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'mtelec',
  description: 'mtelec',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar/>
      <Box className="pt-32" >
        {children}
      </Box>
      <Footer />
    </StyledEngineProvider>
  );
}
