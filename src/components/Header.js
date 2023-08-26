import React from "react";
import { Link } from 'react-router-dom';
import {SiSpacex} from "react-icons/si"

export default function Header(){
    return(
        <>
            <header className="absolute flex items-center justify-between px-5 w-full">
                <div>
                    <Link to="/">
                        {/* icon */}
                        <SiSpacex className="text-8xl text-white"/>
                    </Link>              
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/capsules" className="mr-3 text-white text-sm lg:text-base">Capsules</Link></li>
                        <li><Link to="/rockets" className="text-white text-sm lg:text-base">Rockets</Link></li>
                        <li><Link to="/" className="text-white text-sm lg:text-base"></Link></li>
                        <li><Link to="/" className="text-white text-sm lg:text-base"></Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}