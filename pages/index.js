import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';

export default function Page() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(data => {
            setProducts(data.data.products)
        })
    }, [])

    return (
        <>
            <div className="product-card-container">
                {products.map((product, index) => {
                    return (
                        <div className="product-card" key={index}>
                            <img src={product.thumbnail} alt={'product ' + product.title} className="product-thumbnail"/>
                            Nome: {product.title}
                            <br/>
                            Marca: {product.brand}
                            <br/>
                            R$ {product.price}
                            <br/>
                            Desconto: {product.discountPercentage} %
                            <br/>
                            Avaliação: {product.rating}
                            <br/>
                            Estoque: {product.stock}
                            <br/>
                            <button onClick={() => dispatch(addToCart(product))}>Comprar</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}