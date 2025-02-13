"use client"
import { SessionProvider } from "next-auth/react";

export default function Sessionprovider({children}) {
    return <SessionProvider>{children}</SessionProvider>;
}