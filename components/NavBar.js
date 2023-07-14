import Link from "next/link";
import CartModal from './CartModal'
import { useContext, useState } from "react";
import { CartContext } from "@/context/cartContext";

export default function NavBar() {
    const [showModal, setShowModal] = useState(false);

    const {items, addToCart, removeFromCart} = useContext(CartContext)

    return (
        <div className="placeholder-nav" style={{color: 'white'}}>
            <Link href="/" className="active">Loja</Link>
            <Link href="/produtos">produtos</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#about">About</Link>

            <button onClick={() => setShowModal(!showModal)}>
                Cart With {items.length} items
            </button>

            <CartModal showModal={showModal} setShowModal={setShowModal} />

        </div>
    );
}