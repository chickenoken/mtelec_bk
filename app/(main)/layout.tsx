import { Inter } from "next/font/google";
import "@app/globals.css";
import { StyledEngineProvider } from '@mui/material/styles';
import { Container, CssBaseline, Skeleton, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import React, { Suspense } from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'mtelec',
  description: 'mtelec',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        {/* <LayoutUser /> */}
        <Box component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            backgroundColor: "#f5f5f5",
          }}>
          <Toolbar />
          <Container maxWidth={false} sx={{ mt: 2, mb: 2 }}>
            <Suspense fallback={<Skeleton />}>
              {children}
            </Suspense>
          </Container>
        </Box>
      </Box>
    </StyledEngineProvider>
  );
}
