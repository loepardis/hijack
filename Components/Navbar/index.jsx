import { useRef } from "react"
import Link  from "next/link";
import { burger, items, anchor, profileNav, navbar } from './navbar.module.css'
import { Profile } from '../Profile'
import Image from 'next/image'

export function Navbar() {
    const refBurger = useRef()
    function handleClick() {
        const target = refBurger.current.dataset.target
        const $target = document.getElementById(target)
        refBurger.current.classList.toggle('is-active')
        $target.classList.toggle('is-active')
    }

    return <nav
        className={`navbar is-black container is-fullhd ${navbar}`}
        role="navigation"
        aria-label="main navigation"
    >
        <div className="navbar-brand">
            <Link href='/'>
                <a className="navbar-item link">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        width="112"
                        height="28"
                        alt="Bulma"
                    />
                </a>
            </Link>
            <a
                onClick={handleClick}
                ref={refBurger}
                role="button"
                className={`navbar-burger navbar-item ${burger}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${items}`}>
            <Link href="/">
                <a className={`link navbar-item ${anchor}`}>Home</a>
            </Link>
            <Link href="/">
                <a className={`link navbar-item ${anchor}`}>Machines</a>
            </Link>
            <div className={`${refBurger.current ?? 'navbar-item' } ${profileNav}`}>
                <Profile />
            </div>
        </div>
    </nav >
}