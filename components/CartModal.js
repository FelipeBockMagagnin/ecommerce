import { CartContext } from "@/context/cartContext";
import { useContext, useEffect } from "react";

export default function CartModal(props) {
    const { showModal, setShowModal } = props;

    const {items, addToCart, removeFromCart} = useContext(CartContext)

    useEffect(() => {
        // call click outside
    }, []);

    return (
        <div
            className={showModal ? "modal-dialog show" : "modal-dialog"}
            role="document"
        >
            <div className="modal-content">
                <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title" id="myModalLabel">
                        Rigth Sidebar
                    </h4>


                </div>

                <div className="modal-body">
                    {items.map((product, index) => {
                        console.log(product)
                        return (
                            <div className="cart-product" key={index}>
                                {product.title}
                                <br/>
                                <button onClick={() => removeFromCart(product.id)}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
