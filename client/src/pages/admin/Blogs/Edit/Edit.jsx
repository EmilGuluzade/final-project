import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Blog from "../../../../classes/Blog";
import controller from "../../../../services/api/requests";
import { endpoints } from "../../../../services/api/constants";
import Swal from "sweetalert2";
import {  useNavigate, useParams } from "react-router";

const Edit = () => {
    const {id}=useParams()
    const [blogs,setBlogs]=useState([])
    const [updateBlogs,setUpdateBlogs]=useState({})
const navigate=useNavigate("")
    useEffect(()=>{
controller.getAll(endpoints.blogs).then(res=>{
    setBlogs(res.data)

})

controller.getOne(endpoints.blogs,id).then(res=>{
    const editBlog={...res.data}
     setUpdateBlogs(editBlog)

})
    },[id])
  const formik = useFormik({
    initialValues: {
      title:updateBlogs?.title,
      src: updateBlogs?.src,
      description: updateBlogs?.description,
      author: updateBlogs?.author,
      
    },
    enableReinitialize:true
    ,
    onSubmit: async (values, actions) => {
     
     
      await controller.patch(endpoints.blogs,id, values);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Blog Updated",
        showConfirmButton: false,
        timer: 1000,
      }).then(()=>{
        navigate("/admin/blogs")
      });
      actions.resetForm();
    },
  });

  return (
    <div style={{ width: "40%", margin: "30px 20%",display:"flex",flexDirection:"column",alignItems:"center" }}>
      <h1 >Update Blog</h1>
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
          name="src"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.src}
          type="text"
          variant="outlined"
          error={formik.touched.src && Boolean(formik.errors.src)}
          helperText={formik.touched.src && formik.errors.src}
        />
         <TextField
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          type="text"
          variant="outlined"
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
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
