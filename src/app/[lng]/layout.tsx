import type { Metadata } from "next";
import "./globals.scss";
import styles from "./page.module.scss";
import Menu from "@/app/[lng]/components/Menu";
import Image from "next/image";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaihoko",
  description: "ITSM Aplication",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
export default function RootLayout({
  children,
  params: {
    lng
  },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {

  return (    
    <html lang={lng} dir={dir(lng)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </head>
      <body>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image src="/images/logo.svg" alt="Logo" width="100" height="100" priority={false} />     
          </div>  
          <div className={styles.menu}>
            <Menu lang={lng} /> 
          </div>    
          
          <div className={styles.flags}>
            <Link href={`/pt`}><Image width="30" height="15"  alt="Portuguese" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"/></Link>
            <Link href={`/en`}><Image width="30" height="15"  alt="English" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/></Link>
            <Link href={`/es`}><Image width="30" height="15"  alt="Español" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"/></Link> 
          </div>
        </div>    
       
        <div className={styles.content}>
          {children}
        </div>   
      </body>
    </html>
  );
}
