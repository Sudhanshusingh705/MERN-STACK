import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";

const Product = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/product/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        'Content-type': 'application/json',
      }
    });

    if (response.status === 200) {
      console.log('product data added !');
      Swal.fire({
        icon: 'successfull',
        title: 'Well done',
        text: 'Product Successfull',
      });
    }

    console.log('requst sent');
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3
            className="text-center"
            style={{ color: "cyan", backgroundColor: "black" }}
          >
            PRODUCT ORDER
          </h3>

          <Formik
            initialValues={{ productname: "", price: 0, rating: "" }}
            onSubmit={userSubmit}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-5">Product Name</label>

                <input
                  className="form-control"
                  id="productname"
                  onChange={handleChange}
                  value={values.productname}
                />

                <label className="mt-3">Price</label>

                <input
                  className="form-control"
                  id="price"
                  onChange={handleChange}
                  value={values.price}
                />

                <label className="mt-3">Rating</label>

                <input
                  className="form-control"
                  id="rating"
                  onChange={handleChange}
                  value={values.rating}
                />

                <button type="submit" className="btn btn-success btn-rounded mt-5">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Product;
