import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Jua } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const ibm = IBM_Plex_Sans_Thai({ subsets: ['latin', 'thai'], weight: ['100', "200", "300", "400", "500", "600", "700"], variable: '--font-ibm' });
const mplus = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "800", "900"], variable: '--font-mplus' });
const jua = Jua({ subsets: ['latin'], weight: '400', variable: '--font-jua' });

export const metadata: Metadata = {
    title: "thanayos.sira Profile",
    description: "Thanayos Siratranont's profile",
};

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
                {children}
            </body>
        </html>
    );
}
