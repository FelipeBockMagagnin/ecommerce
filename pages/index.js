import axios from "axios"
import { useEffect, useState } from "react"

export default function Page() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(data => {
            console.log(data)
            setProducts(data.data.products)
        })
    }, [])

    function addToCart(item){

    }

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
                            <button>Comprar</button>
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}