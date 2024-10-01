import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ASHABB React Three Fiber Landing Page",
  description: "Explore the ASHABB landing page featuring stunning 3D visuals created with React Three Fiber. Discover our projects and innovations in a captivating environment.",
  keywords: "React Three Fiber, 3D Graphics, Web Development, Landing Page, Interactive Design, ASHABB, Frontend Development",
  authors: [{ name: "Ashish Gole - ASHABB", url: "https://ashabb.vercel.app" }],
  openGraph: {
    title: "ASHABB React Three Fiber Landing Page",
    description: "Explore the ASHABB landing page featuring stunning 3D visuals created with React Three Fiber.",
    url: "https://ashabb.vercel.app",
    images: [
      {
        url: "https://ashabb.vercel.app/logo.jpg",
        alt: "ASHABB R3F Landing Page",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/logo.ico" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="root">
          {children}
        </div>
      </body>
    </html>
  );
}
