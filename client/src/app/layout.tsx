import './styles/_globals.scss'
import {Roboto} from "@next/font/google";
import {AnimatePresence} from "framer-motion";
import {Router} from "next/router";
import {useEffect} from "react";
import LayoutWrapper from "../../components/custom/LayoutWrapper";
import {useRouter} from "next/navigation";
import AuthContainer from 'modules/auth/AuthContainer';


const inter = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: 'normal'
})
export default async function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html className={inter.className} lang="en">
        <head/>
        <body>
        <div id={'portal'}></div>
        <AuthContainer>
        <LayoutWrapper>
                    {children}
                </LayoutWrapper>
        </AuthContainer>
        </body>
        </html>
    )
}
