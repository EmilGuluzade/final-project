import React from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Product from "../../../../classes/Product";
import controller from "../../../../services/api/requests";
import { endpoints } from "../../../../services/api/constants";
import Swal from "sweetalert2";

const Add = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      src: "",
      description: "",
      author: "",
     
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      src: Yup.string().url("invalid url ").required("Required"),
      description: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
    }),
    onSubmit: async (values, actions) => {
      const { title, images, description, author } = values;
      const newProduct = new Product(title, images, description, author);
      await controller.post(endpoints.blogs, newProduct);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Blog Added",
        showConfirmButton: false,
        timer: 1000,
      });
      actions.resetForm();
    },
  });

  return (
    <div style={{ width: "40%", margin: "30px 20%",display:"flex",flexDirection:"column",alignItems:"center" }}>
      <h1 >Add New Blog</h1>
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
          label="Title"
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
          label="Image"
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
          label="Author"
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
          Add Blog
        </Button>
      </form>
    </div>
  );
};

export default Add;