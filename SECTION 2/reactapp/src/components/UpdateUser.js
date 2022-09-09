import React from 'react'
import { Formik } from "formik";
import Swal from "sweetalert2";

const UpdateUser = ({userFormData}) => {

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/update/"+formdata .id, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      }
    })
    console.log(response.status);

    if (response.status === 200) {
      console.log("user data added !");
      Swal.fire({
        icon: "success",
        title: "Nice",
        text: "Updated Successfully",
      })
    }

    console.log("requst sent");
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3
            className="text-center"
            style={{ color: "yellow", backgroundColor: "black" }}>Update User Details</h3>

          <Formik
            initialValues={{ userFormData }}
            onSubmit={userSubmit}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <label className="mt-5">Username</label>

                <input
                  className="form-control"
                  id="username"
                  onChange={handleChange}
                  value={values.username}
                />

                <label className="mt-3">Email</label>

                <input
                  className="form-control"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />

                <label className="mt-3">Password</label>

                <input
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />

                <label className="mt-3">Age</label>

                <input
                  className="form-control"
                  id="age"
                  onChange={handleChange}
                  value={values.age}
                />

                <button type="submit" className="btn btn-primary mt-5">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;