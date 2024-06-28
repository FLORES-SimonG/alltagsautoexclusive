'use client'

import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import warningIcon from "../../../public/IconWarrning.svg";
import { useState } from "react";
import showPasswordWarning from "../../../public/showPasswordWarning.svg";
import showPasswordCloseWarning from "../../../public/showPasswordCloseWarning.svg";
import showPassword from "../../../public/showPassword.svg";
import showPasswordClose from "../../../public/showPasswordClose.svg";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { postRegister } from "@/helpers/auth/postRegister";
import Image from "next/image";

interface IFormValues {
  email: string;
  password: string;
  passwordVerify: string;
  name: string;
  lastname: string;
  phone: string;
}

const initialValues = {
  email: "",
  password: "",
  passwordVerify: "",
  name: "",
  lastname: "",
  phone: "",
};

const validate = (values: IFormValues) => {
  const errors: Record<string, string> = {};
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!values.email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "La contraseña debe tener al menos 8 caracteres, una mayúscula y un número";
  }

  if (!values.passwordVerify) {
    errors.passwordVerify = "La contraseña es requerida";
  } else if (values.passwordVerify !== values.password) {
    errors.passwordVerify = "La contraseña no coincide";
  }
  if (!values.name) {
    errors.name = "El nombre es requerido";
  } else if (values.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres";
  } else if (values.name.length > 50) {
    errors.name = "El nombre debe tener como máximo 50 caracteres";
  }

  if (!values.lastname) {
    errors.lastname = "El apellido es requerido";
  } else if (values.lastname.length < 2) {
    errors.lastname = "El apellido debe tener al menos 2 caracteres";
  } else if (values.lastname.length > 50) {
    errors.lastname = "El apellido debe tener como máximo 50 caracteres";
  }

  if (!values.phone) {
    errors.phone = "El número de teléfono es requerido";
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "El número de teléfono debe ser un valor numérico";
  }

  return errors;
};

const FormRegister = () => {
  const [passwordText, setPasswordText] = useState("password");
  const [passwordText2, setPasswordText2] = useState("password");

  const handleShow = () => {
    setPasswordText((prev) => (prev === "password" ? "text" : "password"));
  };
  const handleShow2 = () => {
    setPasswordText2((prev) => (prev === "password" ? "text" : "password"));
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setSubmitting }: FormikHelpers<IFormValues>) => {
        postRegister(JSON.stringify(values));
        setSubmitting(false);
        window.location.href = "/auth/login";
      }}
    >
      {({ errors, touched }) => (
        <Form className="text-sm text-textParagraph flex flex-col justify-center h-5/6">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-medium my-2 ">
              Correo electronico
            </label>
            <div className="flex w-full">
              <Field
                type="email"
                name="email"
                placeholder="you@example.com"
                className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0 ${
                  errors.email && touched.email
                    ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                    : ""
                }`}
              />
              <div
                className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                  errors.email && touched.email
                    ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                    : ""
                }`}
              >
                <img
                  src={warningIcon.src}
                  alt="warningIcon"
                  className={`${
                    errors.email && touched.email ? "block" : "hidden"
                  }`}
                />
              </div>
            </div>
            <div className="h-4 text-warning">
              <ErrorMessage name="email" component="span" />
            </div>
            
          </div>
          <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full pr-4">
              <label htmlFor="title" className="font-medium my-2 ">
                Contraseña
              </label>
              <div className="flex w-full">
                <Field
                  type={passwordText}
                  name="password"
                  placeholder="contraseña"
                  className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0 ${
                    errors.password && touched.password
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                />
                <div
                  className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.password && touched.password
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                >
                  {passwordText === "password" ? <Image
                  src={showPasswordWarning}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "block" : "hidden"
                  }`}
                  onClick={handleShow}
                />:
                <Image
                  src={showPasswordCloseWarning}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "block" : "hidden"
                  }`}
                  onClick={handleShow}
                />
                }
                {passwordText === "password" ?<Image
                  src={showPassword}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "hidden" : "block"
                  }`}
                  onClick={handleShow}
                />:
                <Image
                  src={showPasswordClose}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "hidden" : "block"
                  }`}
                  onClick={handleShow}
                />
                }
                </div>
              </div>
              <div className="h-4 text-warning">
                <ErrorMessage name="password" component="span" />
              </div>
            </div>
            <div className="flex flex-col w-full pl-4">
              <label htmlFor="title" className="font-medium my-2 ">
                Repetir contraseña
              </label>
              <div className="flex w-full">
                <Field
                  type={passwordText2}
                  name="passwordVerify"
                  placeholder="contraseña"
                  className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.passwordVerify && touched.passwordVerify
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                />
                <div
                  className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.passwordVerify && touched.passwordVerify
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                >
                  {passwordText === "password" ? <Image
                  src={showPasswordWarning}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "block" : "hidden"
                  }`}
                  onClick={handleShow2}
                />:
                <Image
                  src={showPasswordCloseWarning}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "block" : "hidden"
                  }`}
                  onClick={handleShow2}
                />
                }
                {passwordText === "password" ?<Image
                  src={showPassword}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "hidden" : "block"
                  }`}
                  onClick={handleShow2}
                />:
                <Image
                  src={showPasswordClose}
                  alt="warningIcon"
                  className={`${
                    errors.password && touched.password ? "hidden" : "block"
                  }`}
                  onClick={handleShow2}
                />
                }
                </div>
              </div>
              <div className="h-4 text-warning">
              <ErrorMessage name="passwordVerify" component="span"/>
              </div>
            </div>
            </div>
            <div className="flex flex-row w-full">
            <div className="flex flex-col w-full pr-4">
              <label htmlFor="title" className="font-medium my-2 ">
                Nombre
              </label>
              <div className="flex w-full">
                <Field
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.name && touched.name
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                />
                <div
                  className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.name && touched.name
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                >
                  <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                      errors.name && touched.name ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
              <div className="h-4 text-warning">
                <ErrorMessage
                  name="name"
                  component="span"
                />
              </div>
            </div>
            <div className="flex flex-col w-full pl-4">
              <label htmlFor="title" className="font-medium my-2 ">
                Apellido
              </label>
              <div className="flex w-full">
                <Field
                  type="text"
                  name="lastname"
                  placeholder="Ingrese su apellidos"
                  className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.lastname && touched.lastname
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                />
                <div
                  className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.lastname && touched.lastname
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                >
                  <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                      errors.lastname && touched.lastname ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
              <div className="h-4 text-warning">
              <ErrorMessage
                name="lastname"
                component="span"
              />
              </div>
            </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="title" className="font-medium my-2 ">
                Número telefónicos
              </label>
              <div className="flex w-full">
                <Field
                  type="text"
                  name="phone"
                  placeholder="Ingrese numero telefonico"
                  className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.phone && touched.phone
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                />
                <div
                  className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                    errors.phone && touched.phone
                      ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                      : ""
                  }`}
                >
                  <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                      errors.phone && touched.phone ? "block" : "hidden"
                    }`}
                  />
                </div>
              </div>
              <div className="h-4 text-warning">
              <ErrorMessage
                name="phone"
                component="span"
              />
              </div>
            </div>
          </div>
          <div className="my-4 w-full flex justify-center flex-col items-center">
          <a
              href="/auth/register"
              className=" text-base font-medium my-4 text-center text-textSecondary"
            >
              ¿Ya tienes usuario?
            </a>
          <ButtonPrimary
              title="Registrarme" size="lg" color="bg-secondary"
            /> 
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default FormRegister;