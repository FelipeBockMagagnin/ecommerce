import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import CartModal from './CartModal'
import { useState } from "react";

export default function NavBar() {
    const [showModal, setShowModal] = useState(false);
    const cart = useSelector((state) => state.cart);

    return (
        <div className="placeholder-nav" style={{color: 'white'}}>
            <Link href="/" className="active">Loja</Link>
            <Link href="/produtos">produtos</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#about">About</Link>

            <button onClick={() => setShowModal(!showModal)}>
                Cart With {cart.length} items
            </button>

            <CartModal showModal={showModal} setShowModal={setShowModal} />

        </div>
    );
}