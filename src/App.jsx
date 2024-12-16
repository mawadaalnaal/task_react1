import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Product from "./Product";
import "./App.css";


function App() {

   //   استخدام مكتبة "React Hook Form"

  const { register, handleSubmit, reset } = useForm();

  // useState لادارة حالة المنتجات

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 150 },
  ]);

  // إضافة منتج جديد

  const onSubmit = (data) => {
    const newProduct = {
      id: products.length + 1,
      name: data.productName,
      price: parseFloat(data.productPrice),
    };

    //تحديث المنتجات باضافة منتج جديد 

    setProducts([...products, newProduct]);
    reset(); 
  };

  // حذف منتج

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // زيادة السعر
  const handleIncreasePrice = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, price: product.price + 100 } : product
      )
    );
  };



  return (
    <div style={{ width: "50%", margin: "auto", padding: "20px" }}>
      <h2>Product List</h2>

     {/* نموذج لإضافة منتج جديد */}

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "20px" }}>

         {/*حقل لاضافة اسم المنتج */}

        <label>Product Name</label>
      
        <input
          {...register("productName", { required: true })}
          placeholder="Enter product name"
          style={{ display: "block", margin: "10px 0" }}
        />
         
          {/*حقل لاضافة سعر المنتج */}

        <label>Price</label>
        <input
          type="number"
          {...register("productPrice", { required: true })}
          placeholder="Enter product price"
          style={{ display: "block", margin: "10px 0" }}
        />
 
          {/* زر لإضافة المنتج */}

        <button
          type="submit"
          style={{ backgroundColor: "green", color: "white", padding: "10px" }}
        >
          Add Product
        </button>
      </form>

     {/*لعرض قائمة المنتجات */}

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={handleDelete}
          onIncreasePrice={handleIncreasePrice}
        />
      ))}
    </div>
  );
}

export default App;
