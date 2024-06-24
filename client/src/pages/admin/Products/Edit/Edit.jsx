import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Product from "../../../../classes/Product";
import controller from "../../../../services/api/requests";
import { endpoints } from "../../../../services/api/constants";
import Swal from "sweetalert2";
import {  useNavigate, useParams } from "react-router";

const Edit = () => {
    const {id}=useParams()
    const [products,setProducts]=useState([])
    const [updateProducts,setUpdateProducts]=useState({})
const navigate=useNavigate("")
    useEffect(()=>{
controller.getAll(endpoints.products).then(res=>{
    setProducts(res.data)

})

controller.getOne(endpoints.products,id).then(res=>{
    const editProduct={...res.data}
     setUpdateProducts(editProduct)

})
    },[id])
  const formik = useFormik({
    initialValues: {
      title:updateProducts?.title,
      images: updateProducts?.images,
      description: updateProducts?.description,
      brand: updateProducts?.brand,
      collections: updateProducts?.collections,
      category: updateProducts?.category,
      rating: updateProducts?.rating,
      stock: updateProducts?.stock,
      price: updateProducts?.price,
    },
    enableReinitialize:true
    ,
    onSubmit: async (values, actions) => {
     
     
      await controller.patch(endpoints.products,id, values);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Product Updated",
        showConfirmButton: false,
        timer: 1000,
      }).then(()=>{
        navigate("/admin")
      });
      actions.resetForm();
    },
  });

  return (
    <div style={{ width: "40%", margin: "30px 20%",display:"flex",flexDirection:"column",alignItems:"center" }}>
      <h1 >Update Product</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          borderRadius: "6px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          padding: "15px 25px",
          backgroundColor:"",
        }}
      >
        <TextField
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          type="text"
          variant="outlined"
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          name="images"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.images}
          type="text"
          variant="outlined"
          error={formik.touched.images && Boolean(formik.errors.images)}
          helperText={formik.touched.images && formik.errors.images}
        />
        <TextField
          name="category"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
          select
          label="Category"
          helperText="Please select your category"
          error={formik.touched.category && Boolean(formik.errors.category)}
        >
          <MenuItem value={"t-shirt"}>T-shirt</MenuItem>
          <MenuItem value={"jeans"}>Jeans</MenuItem>
          <MenuItem value={"shoes"}>Shoes</MenuItem>
          <MenuItem value={"earring"}>Earring</MenuItem>
          <MenuItem value={"necklace"}>Necklace</MenuItem>
          <MenuItem value={"ring"}>Ring</MenuItem>
        </TextField>
        <TextField
          name="brand"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.brand}
          select
          label="Brand"
          helperText="Please select your brand"
          error={formik.touched.brand && Boolean(formik.errors.brand)}
        >
          <MenuItem value={"adidas"}>Adidas</MenuItem>
          <MenuItem value={"nike"}>Nike</MenuItem>
          <MenuItem value={"puma"}>Puma</MenuItem>
          <MenuItem value={"earing"}>Earring</MenuItem>
          <MenuItem value={"rolex"}>Rolex</MenuItem>
        </TextField>
        <TextField
          name="collections"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.collections}
          select
          label="Collections"
          helperText="Please select your collections"
          error={formik.touched.collections && Boolean(formik.errors.collections)}
        >
          <MenuItem value={"men"}>Men</MenuItem>
          <MenuItem value={"women"}>Women</MenuItem>
          <MenuItem value={"accessories"}>Accessories</MenuItem>
        </TextField>
        <TextField
          name="rating"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rating}
          label="Rating"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          error={formik.touched.rating && Boolean(formik.errors.rating)}
          helperText={formik.touched.rating && formik.errors.rating}
        />
        <TextField
          name="stock"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stock}
          label="Stock"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          error={formik.touched.stock && Boolean(formik.errors.stock)}
          helperText={formik.touched.stock && formik.errors.stock}
        />
        <TextField
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
          label="Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder="Description"
          multiline
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button variant="contained" color="primary" type="submit">
         Update
        </Button>
      </form>
    </div>
  );
};

export default Edit;
