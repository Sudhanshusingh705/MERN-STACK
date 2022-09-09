import { Formik } from "formik";
import React from "react";


const Login = () => {
  // 1. Create a submit function
  const loginSubmit = (formdata, {resetForm}) => {
    console.log(formdata);
    resetForm();

    // data to store in database
  };

  //2. Locate FOrm Tag and use formik

  return (
    <>
      {/* Section: Design Block */}
      <section className=" text-center text-lg-start">
        
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <Formik
                  initialValues={{ email: "", password: "" }} onSubmit={loginSubmit} >
                  {({values,handleSubmit,handleChange}) => (
                    <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        value = {values.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        values={values.password} onChange={handleChange}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example31"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    {/* Submit button */}
                    <button
                   
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>
                  </form>
                  )}
                
                
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>

    //   <div >
    // <h1>My Login Page</h1>
    // <img src='pic.jpg'/>
    //   </div>
  );
};

export default Login;