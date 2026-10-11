import React from "react";

function Product() {
  const product = [
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      price: 299.99,
      description:
        "Experience premium sound with industry-leading noise cancellation.",
    },
    {
      id: 2,
      name: "Mechanical Keychron Keyboard",
      price: 109.5,
      description:
        "Tactile typing experience with customizable RGB backlighting.",
    },
    {
      id: 3,
      name: "Ergonomic Optical Mouse",
      price: 49.99,
      description:
        "Designed for comfort during long working or gaming sessions.",
    },
    {
      id: 4,
      name: "4K Curved Monitor",
      price: 349.0,
      description: "Immersive 32-inch curved display with ultra-HD resolution.",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {product.map((temp) => {
            return (
              <div 
                className="card" 
                key={temp.id} 
                style={{ width: '18rem', border: '3px solid #333', marginBottom:'10px'}}
              >
                <div className="card-body">
                  <h5 className="card-title">Product Details</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {temp.name}
                  </h6>
                  <h4 className="card-text text-primary">
                    ${temp.price}
                  </h4>
                  <p className="card-text">
                    {temp.description}
                  </p>
                  <a href="#" className="btn btn-primary btn-sm">
                    View Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
