import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import MainLayout from "./components/layout";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"], // Specify the weights you want to include
  subsets: ["latin"], // Specify subsets
  display: "swap", // Use `swap` to avoid invisible text during load
});

export const metadata = {
  title: "BSides Nairobi",
  description: "Bsides Nairobi Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <link rel="icon" href="../images/bsidesLogo.png" />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouterCacheProvider>
            <MainLayout>{children}</MainLayout>
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
