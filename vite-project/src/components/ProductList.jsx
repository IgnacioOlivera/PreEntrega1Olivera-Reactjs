import React, { useEffect, useState } from "react";

export const ProductList = () => { 
    
    const [ products, setProducts] = useState ([ ])
    
    const [ porductsPerPage, setProductsPerPage] = useState (6)
    
    const [ currentPage, setCurrentPage] = useState (1)

    const productList = async () => { 
        const data = await fetch ("https://fakestoreapi.com/products")
        const products = await data.json()
       
        setProducts(products)

    };
    useEffect(() => { 
        productList();


    }, []);



    return (
    <>
        <div className="container-products">
           {products.map(product => (
            <div className="card-product">
                <figure className="container-img">
                    <img src="{product.img}" alt="{product.title}" />
                </figure>
                <div className="info-product">
                    <h3>{product.title}</h3>
                    <p className="price">$ {product.price}</p>
                    <button>Añadir al carrito</button>

                </div>
            </div>

           ))}
           
         
        </div>
        <webDesing  />
     
    
    </> 
  );
};