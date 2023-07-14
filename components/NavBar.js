'use client'

import Link from "next/link";

export default function NavBar() {
    return (
        <div class="placeholder-nav">
            <Link href="/" class="active">Loja</Link>
            <Link href="/produtos">produtos</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#about">About</Link>
        </div>
    );
}