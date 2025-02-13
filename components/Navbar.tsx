"use client"
import { useState,useContext,useRef,useMemo } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { darkmodecontext } from "./Darkmodecontext";
import Swal from "sweetalert2";
import Link from "next/link";

interface Navbarprop {
    darkMode: () => void;
    isdark:boolean;
}

export default function Navbar() {
    const [isclickprofile,setisclickprofile] = useState<boolean>(false);
    const datadarkmodecontext = useContext<Navbarprop>(darkmodecontext);
    const ischeckfirstlogin = useRef(false);
    const { data:session }:any = useSession();

    //! click profile

    const clickProfile = () => {
        setisclickprofile(prev => !prev);
    }
  
    //!

    //! login and logout

    const login = () => {
        signIn();
    }

    const logout = () => {
        signOut();
    }

    //!

    return(
        <nav className="flex p-[10px] items-center gap-[10px] justify-between">
            <div className="w-[33%]">
                <h1 className="font-bold text-[30px] text-[#00bcff]">Phudon</h1>
            </div>
            <div className="w-[33%]">
                <input type="text" placeholder="Search..." className={`rounded-[2px] p-[2px_10px] w-[100%] outline-none ${datadarkmodecontext.isdark ? "bg-[#24242a] text-[#fff]":"shadow-[0_0_10px_#dedede]"}`} />
            </div>
            <div className="w-[33%] flex justify-end items-center">
                <svg onClick={() => datadarkmodecontext.darkMode()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} cx="12" cy="12" r="4"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="M12 2v2"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="M12 20v2"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="m4.93 4.93 1.41 1.41"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="m17.66 17.66 1.41 1.41"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="M2 12h2"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="M20 12h2"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="m6.34 17.66-1.41 1.41"/><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="m19.07 4.93-1.41 1.41"/></svg>
                <div onClick={() => clickProfile()} className="ml-[20px] flex items-center cursor-pointer relative">
                    <img className="w-[35px] h-[35px] rounded-[100%]" src={session ? session.user.image:"./user.png"} alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path className={datadarkmodecontext.isdark ? "stroke-[#fff]":""} d="m6 9 6 6 6-6"/></svg>
                    <ul className={`block rounded-[4px] absolute p-[10px] w-[150px] right-[0] top-[50px] overflow-hidden transition h-[0] opacity-[0] transition-all duration-200 ${isclickprofile ? "h-[150px] opacity-[1]":""} ${datadarkmodecontext.isdark ? "bg-[#24242a]":"bg-[#fff] shadow-[0_0_10px_#dedede]"}`}>
                        <li><Link href={"/"} className={`text-[15px] ${datadarkmodecontext.isdark ? "text-[#fff]":"text-[#000]"}`}>Home</Link></li>
                        <li><Link onClick={() => !session ? login():""} href={"/favorits"} className={`text-[15px] ${datadarkmodecontext.isdark ? "text-[#fff]":"text-[#000]"}`}>Favorits</Link></li>
                        <li><Link onClick={() => !session ? login():""} href={"/camp"} className={`text-[15px] ${datadarkmodecontext.isdark ? "text-[#fff]":"text-[#000]"}`}>Camp</Link></li>
                        <li>{session ? <button onClick={() => logout()} className={datadarkmodecontext.isdark ? "text-[#fff]":"text-[#000]"}>Logout</button>:<button onClick={() => login()} className={datadarkmodecontext.isdark ? "text-[#fff]":"text-[#000]"}>Login</button>}</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}