"use client";
import { Outfit } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Jua } from "next/font/google";
import "./globals.css";
import {
  TranslationProvider,
  useTranslation,
} from "@/contexts/TranslationContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
// import StaggeredMenu from "@/components/StaggeredMenu";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const ibm = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm",
});
const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  variable: "--font-mplus",
});
const jua = Jua({ subsets: ["latin"], weight: "400", variable: "--font-jua" });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { locale, changeLocale } = useTranslation();


  return (
    <>
      {/* Language Switcher */}
      {/* <div className="fixed top-4 right-4 z-50"> */}
      {/* <LanguageSwitcher currentLocale={locale} onLocaleChange={changeLocale} /> */}
      {/* </div> */}
      {/* <div>
        <StaggeredMenu
          isFixed={true}
          position="left"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#ffb6b6ff", "#ff6b6b"]}
          logoUrl="/Katari.svg"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div> */}
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ibm.variable} ${mplus.variable} ${jua.variable}`}
      >
        <TranslationProvider>
          <LayoutContent>{children}</LayoutContent>
        </TranslationProvider>
      </body>
    </html>
  );
}
