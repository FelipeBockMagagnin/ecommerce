'use client'

import Link from "next/link";

export default function NavBar() {
    return (
        <div className="placeholder-nav" style={{color: 'white'}}>
            <Link href="/" className="active">Loja</Link>
            <Link href="/produtos">produtos</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#about">About</Link>

            <Link href='/'>
                Cart With 0 items
            </Link>
        </div>
    );
}