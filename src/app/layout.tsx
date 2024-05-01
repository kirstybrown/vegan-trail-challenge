import "../styles/globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import PageWrapper from "@/components/page-wrapper";
import SideNav from "@/components/side-nav";

export const metadata: Metadata = {
  title: "Vegan Trail Challenge",
  description: "Let the adventure start...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <div className="flex flex-col flex-grow">
                <PageWrapper>{children}</PageWrapper>
              </div>

              <Footer />
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
