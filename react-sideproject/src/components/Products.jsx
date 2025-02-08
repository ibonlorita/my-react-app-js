function ProductList() {
    const products = [
        { id: 1, name: "Laptop", price: 1200, inStock: true},
        { id: 2, name: "Phone", price: 800, inStock: false},
    ]

    return (
        <div>
            {products.map(
                (product) => (
                    <p>{product.name}-${product.price} {product.inStock ? "In Stock": "Out of Stock"}</p>
                ))};

        </div>
    )

};

export default ProductList;