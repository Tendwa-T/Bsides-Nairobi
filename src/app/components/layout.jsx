"use client";
// This page handles the layout of the application
// It wraps the children components in an ErrorBoundary and Suspense component
// Any component added here appears in the whole appplication
// All changes here will be reflected in the whole application
import { Box } from "@mui/material";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import ErrorPage from "./error";
import LoadingPage from "../loading";

export default function MainLayout({ children }) {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<LoadingPage />}>
        <section>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {children}
          </Box>
        </section>
      </Suspense>
    </ErrorBoundary>
  );
}

