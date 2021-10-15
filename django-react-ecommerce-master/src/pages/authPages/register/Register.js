import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import RegisterForm from "./components/RegisterForm";
import { register } from "@actions/authActions";
import { phone_number_reg } from "../regexes";
import { UserType } from "./components/UserType";

const validationSchema = Yup.object({
  first_name: Yup.string().required("Required field"),
  last_name: Yup.string().required("Required field"),
  phone_number: Yup.string()
    .matches(phone_number_reg, "Invalid phone number")
    .required("Required field"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required field")
});

const Register = () => {
  const values = {
    phone_number: "",
    password: "",
    first_name: "",
    last_name: ""
  };
  const dispatch = useDispatch();

  const [user_type, setType] = useState("NA");
  const changeType = {
    setBuyer: () => {
      setType("Buyer");
    },
    setSeller: () => {
      setType("Seller");
    }
  }

  const handleSubmit = (
    { first_name, last_name, phone_number, password },
    { setErrors, resetForm }
  ) => {
    const user = {
      first_name,
      last_name,
      user_type,
      phone_number,
      password
    };
    console.log(user_type);
    dispatch(register(user, setErrors, resetForm));
  };

  return (
    <>
      {user_type === "NA" ?
        <UserType changeType={changeType} /> :

        <Formik
          initialValues={values}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {props => <RegisterForm {...props} />}
        </Formik>
      }
    </>
  );
};

export default Register;
