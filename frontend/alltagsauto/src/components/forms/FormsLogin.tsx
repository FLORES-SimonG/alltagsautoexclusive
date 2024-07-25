"use client";

import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import warningIcon from "../../../public/IconWarrning.svg";
import { postLogin } from "@/helpers/auth/postLogin";
import showPasswordWarning from "../../../public/showPasswordWarning.svg";
import showPasswordCloseWarning from "../../../public/showPasswordCloseWarning.svg";
import showPassword from "../../../public/showPassword.svg";
import showPasswordClose from "../../../public/showPasswordClose.svg";
import { useState } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";
interface IFormValues {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

const validate = (values: IFormValues) => {
  const errors: Record<string, string> = {};
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!values.password) {
    errors.password = "";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Mindestens: 8 Zeichen mit 1 Großbuchstaben und 1 Zahl";
  }

  if (!values.email) {
    errors.email = "Email ist erforderlich";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email ist ungültig";
  }

  return errors;
};

const FormsLogin = () => {
  const [passwordText, setPasswordText] = useState("password");
  const handleShow = () => {
    setPasswordText((prev) => (prev === "password" ? "text" : "password"));
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { setSubmitting }: FormikHelpers<IFormValues>) => {
        postLogin(values)
          .then((data) => {
            if (data) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Willkommen bei Alltagsauto-Exclusive`,
                showConfirmButton: false,
                timer: 1500,
              });
              Cookies.set("token", data);
              setTimeout(() => {
                window.location.href = "/";
              }, 1500);
              setSubmitting(false);
            } else if (!data) {
              Swal.fire({
                position: "center",
                icon: "error",
                title: `User oder Passwort sind falsch`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            setSubmitting(false);
          });
      }}
    >
      {({ errors, touched }) => (
        <Form className="text-sm text-textParagraph flex flex-col justify-center w-96  m-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium my-2 ">
              Email
            </label>
            <div className="flex w-full">
              <Field
                type="email"
                name="email"
                placeholder="Schreiben Sie Ihre E-Mail-Adresse"
                className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                  errors.email && touched.email
                    ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                    : ""
                }`}
              />
              <div
                className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0 ${
                  errors.email && touched.email
                    ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                    : ""
                }`}
              >
                <Image
                  src={warningIcon}
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
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="font-medium my-2 ">
              Passwort
            </label>
            <div className="flex">
              <Field
                type={passwordText}
                name="password"
                placeholder="Schreiben Sie Ihr Passwort"
                className={`w-96 rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                  errors.password && touched.password
                    ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                    : ""
                }`}
              />
              <div
                className={`flex justify-center rounded-r-md px-4 bg-white border-backgroundGrey border border-l-transparent focus:outline-none focus:border-backgroundGrey focus:border-r-transparent focus:shadow-none focus:ring-0  ${
                  errors.password && touched.password
                    ? "border-warningBorder text-warningText font-medium focus:border-warningBorder"
                    : ""
                }`}
              >
                {passwordText === "password" ? (
                  <Image
                    src={showPasswordWarning}
                    alt="warningIcon"
                    className={`${
                      errors.password && touched.password ? "block" : "hidden"
                    }`}
                    onClick={handleShow}
                  />
                ) : (
                  <Image
                    src={showPasswordCloseWarning}
                    alt="warningIcon"
                    className={`${
                      errors.password && touched.password ? "block" : "hidden"
                    }`}
                    onClick={handleShow}
                  />
                )}
                {passwordText === "password" ? (
                  <Image
                    src={showPassword}
                    alt="warningIcon"
                    className={`${
                      errors.password && touched.password ? "hidden" : "block"
                    }`}
                    onClick={handleShow}
                  />
                ) : (
                  <Image
                    src={showPasswordClose}
                    alt="warningIcon"
                    className={`${
                      errors.password && touched.password ? "hidden" : "block"
                    }`}
                    onClick={handleShow}
                  />
                )}
              </div>
            </div>
            <div className="h-8 text-warning">
              <ErrorMessage name="password" component="span" />
            </div>
            <a
              href="/auth/register"
              className=" underline text-base font-medium m-2 text-center text-indigo-700"
            >
              Neues Konto erstellen
            </a>
          </div>

          <div className="  flex flex-col items-center justify-center  gap-5">
            <ButtonPrimary
              title="Iniciar con Google"
              size="lg"
              color="bg-tertiary"
              onClick="#"
            />
            <ButtonPrimary
              title="Iniciar sesión"
              size="lg"
              color="bg-secondary"
              onClick="#"
            />
            <ButtonPrimary
              title="Test dashboard User"
              size="lg"
              color="bg-red-400"
              onClick="/user"
            />
            <ButtonPrimary
              title="Test dashboard Admin"
              size="lg"
              color="bg-red-400"
              onClick="/admin"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default FormsLogin;
