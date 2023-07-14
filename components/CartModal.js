import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

export default function CartModal(props) {
    const { showModal, setShowModal } = props;
    const cart = useSelector((state) => state.cart);

    console.log('cart', cart)
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
                    {cart.map((product, index) => {
                        console.log(product)
                        return (
                            <div className="cart-product" key={index}>{product.title} <br/></div>
                        )

                    })}
                </div>
            </div>
        </div>
    );
}
