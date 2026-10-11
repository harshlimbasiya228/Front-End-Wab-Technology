import React, { useState } from 'react'

function Productcrud() {
    const [product, setProduct] = useState([]);
    const [productName,setProductName] = useState("");
    const [editIndex , setEditIndex] = useState(-1);

    const saveProduct = ()=>{
        if(productName === "")
            return;

        if(editIndex ===-1){
            setProduct([...product, productName]);
        }else{
            const updateProduct = [...product];
            updateProduct[editIndex] = productName;
            setProduct(updateProduct);
            setEditIndex(-1);
        }
        setProductName("");
    }

    const deleteproduct = (deleteindex)=>{
        const newproduct = product.filter((item,index) => index != deleteindex);
        setProduct(newproduct);
    }
    
    const editproduct = (index)=>{
        setProductName(product[index]);
        setEditIndex(index);
    }
  return (
   <>
   <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Product CRUD</h2>

        <input
        type='text'
        value={productName}
        onChange={(e)=> setProductName(e.target.value)}
        placeholder='Enter  a Product name'
        />
        <button onClick={saveProduct}>{editIndex===-1 ? "Add" : "Update"}</button>

        <ul>
            {product.map((product,index)=>(
                <li key={index} >{product}
                <button onClick={()=> editproduct(index)}>Edit</button>
                <button onClick={()=> deleteproduct(index)}>delete</button>
                </li>

            ))}
        </ul>
   </div>
   </>
  )
}

export default Productcrud