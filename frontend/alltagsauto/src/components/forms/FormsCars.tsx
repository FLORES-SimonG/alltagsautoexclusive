"use client"
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import { postCars } from "../../helpers/cars/postCars";
import warningIcon from "../../../public/IconWarrning.svg";
import Swal from 'sweetalert2'
import ButtonPrimary from "../buttons/ButtonPrimary";
interface IFormValues {
    brand: string;
    model: string;
    year: string;
    seatingCapacity: string;
    doorsNumber: string;
    fuelType: string;
    transmissionType: string;
    price: string;
    image: File | null;
}
const initialValues: IFormValues = {
    brand: "",
    model: "",
    year: "",
    seatingCapacity: "",
    doorsNumber: "",
    fuelType: "",
    transmissionType: "",
    price: "",
    image: null

};

const validate = (values: IFormValues) => {
  const errors: Record<string, string> = {};

  if (!values.brand) {
    errors.brand = "The brand is required";
  } 

  if (!values.model) {
    errors.model = "The model is required";
  }


  if (!values.year) {
    errors.year = "The year is required";
  }


  if (!values.seatingCapacity) {
    errors.seatingCapacity = "The seating capacity is required";
  }


  if (!values.doorsNumber) {
    errors.doorsNumber = "The doors number is required";
  }


  if (!values.fuelType) {
    errors.fuelType = "The fuel type is required";
  }


  if (!values.transmissionType) {
    errors.transmissionType = "The transmission type is required";
  }


  if (!values.price) {
    errors.price = "The price is required";
  }


  if (!values.image) {
    errors.image = "The image is required";
  } else if (
    values.image&&
    values.image.type &&
    !values.image.type.startsWith("image/")
  ) {
    errors.image = "The image must be an image";
  }

  
  return errors;
};

const FormCarsFormik = () => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={(values, { setSubmitting }: FormikHelpers<IFormValues>) => {
      console.log(values);
      postCars(values)
        .then((response) => {
          console.log(response);
          if (!response.statusCode) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Se agrego correctamente`,
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            window.location.href = '/dashboardAdmin/news'
          }, 1500);
            setSubmitting(false);
          }else {
          throw new Error("Failed to add news");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ocurrió un error al agregar la noticia",
            showConfirmButton: false,
            timer: 1500
          });
          setSubmitting(false);
        });
    }}
  >
    {({ errors, touched, setFieldValue }) => (
      <Form className="text-sm text-textParagraph m-5 border  rounded-2xl p-5 shadow-2xl w-full">
        <div className="flex flex-row gap-10">
            <div className="flex flex-col h-20 w-full">
            <label htmlFor="brand" className="font-medium my-2">
                Brand
            </label>
            <div className="flex w-full">
                <Field 
                type="text"
                name="brand"
                placeholder="Example: Ford"
                className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                    errors.brand && touched.brand
                    ? "border-warningBorder text-warningText font-medium"
                    : ""
                }`}
                />
                <div
                className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                    errors.brand && touched.brand
                    ? "border-warningBorder text-warningText font-medium "
                    : ""
                }`}
                >
                <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                    errors.brand && touched.brand ? "block" : "hidden"
                    }`}
                />
                </div>
            </div>
            <div className="h-3 text-warning">
                <ErrorMessage
                name="brand"
                component="span"
                />
            </div>
            </div>
            <div className="flex flex-col h-20 w-full">
            <label htmlFor="model" className="font-medium my-2">
                Model
            </label>
            <div className="flex w-full">
                <Field
                type="text"
                name="model"
                placeholder="Example: Focus"
                className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                    errors.model && touched.model
                    ? "border-warningBorder text-warningText font-medium"
                    : ""
                }`}
                />
                <div
                className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                    errors.model && touched.model
                    ? "border-warningBorder text-warningText font-medium "
                    : ""
                }`}
                >
                <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                    errors.model && touched.model ? "block" : "hidden"
                    }`}
                />
                </div>
            </div>
            <div className="h-3 text-warning">
                <ErrorMessage
                name="model"
                component="span"
                />
            </div>
            </div>  
        </div>
        <div className="flex flex-row gap-10 mt-2">
            <div className="flex flex-col h-20 w-full">
            <label htmlFor="year" className="font-medium my-2">
                Moder Year
            </label>
            <div className="flex w-full">
                <Field
                type="text"
                name="year"
                placeholder="Example: 2010"
                className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                    errors.year && touched.year
                    ? "border-warningBorder text-warningText font-medium"
                    : ""
                }`}
                />
                <div
                className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                    errors.year && touched.year
                    ? "border-warningBorder text-warningText font-medium "
                    : ""
                }`}
                >
                <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                    errors.year && touched.year ? "block" : "hidden"
                    }`}
                />
                </div>
            </div>
            <div className="h-3 text-warning">
                <ErrorMessage
                name="year"
                component="span"
                />
            </div>
            </div>
            <div className="flex flex-col h-20 w-full">
            <label htmlFor="seatingCapacity" className="font-medium my-2">
                Seating Capacity
            </label>
            <div className="flex w-full">
                <Field
                type="text"
                name="seatingCapacity"
                placeholder="Example: 5"
                className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                    errors.seatingCapacity && touched.seatingCapacity
                    ? "border-warningBorder text-warningText font-medium"
                    : ""
                }`}
                />
                <div
                className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                    errors.seatingCapacity && touched.seatingCapacity
                    ? "border-warningBorder text-warningText font-medium "
                    : ""
                }`}
                >
                <img
                    src={warningIcon.src}
                    alt="warningIcon"
                    className={`${
                    errors.seatingCapacity && touched.seatingCapacity ? "block" : "hidden"
                    }`}
                />
                </div>
            </div>
            <div className="h-3 text-warning">
                <ErrorMessage
                name="seatingCapacity"
                component="span"
                />
            </div>
            </div>
        </div>
        <div className="flex flex-row gap-10 mt-2">
        <div className="flex flex-col h-20 w-full">
          <label htmlFor="doorsNumber" className="font-medium my-2">
            Doors Number
          </label>
          <div className="flex w-full">
            <Field
              type="text"
              name="doorsNumber"
              placeholder="Example: 5"
              className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                errors.doorsNumber && touched.doorsNumber
                  ? "border-warningBorder text-warningText font-medium"
                  : ""
              }`}
            />
            <div
              className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                errors.doorsNumber && touched.doorsNumber
                  ? "border-warningBorder text-warningText font-medium "
                  : ""
              }`}
            >
              <img
                src={warningIcon.src}
                alt="warningIcon"
                className={`${
                  errors.doorsNumber && touched.doorsNumber ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className="h-3 text-warning">
            <ErrorMessage
              name="doorsNumber"
              component="span"
            />
          </div>
        </div>
        <div className="flex flex-col h-20 w-full">
          <label htmlFor="fuelType" className="font-medium my-2">
            Fuel Type
          </label>
          <div className="flex w-full">
            <Field
              type="text"
              name="fuelType"
              placeholder="Example: Diesel"
              className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                errors.fuelType && touched.fuelType
                  ? "border-warningBorder text-warningText font-medium"
                  : ""
              }`}
            />
            <div
              className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                errors.fuelType && touched.fuelType
                  ? "border-warningBorder text-warningText font-medium "
                  : ""
              }`}
            >
              <img
                src={warningIcon.src}
                alt="warningIcon"
                className={`${
                  errors.fuelType && touched.fuelType ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className="h-3 text-warning">
            <ErrorMessage
              name="transmissionType"
              component="span"
            />
          </div>
        </div>
        </div>
        <div className="flex flex-row gap-10 mt-2">
        <div className="flex flex-col h-20 w-full">
          <label htmlFor="transmissionType" className="font-medium my-2">
            Transmission Type
          </label>
          <div className="flex w-full">
            <Field
              type="text"
              name="transmissionType"
              placeholder="Example: Manual"
              className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                errors.transmissionType && touched.transmissionType
                  ? "border-warningBorder text-warningText font-medium"
                  : ""
              }`}
            />
            <div
              className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                errors.transmissionType && touched.transmissionType
                  ? "border-warningBorder text-warningText font-medium "
                  : ""
              }`}
            >
              <img
                src={warningIcon.src}
                alt="warningIcon"
                className={`${
                  errors.transmissionType && touched.transmissionType ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className="h-3 text-warning">
            <ErrorMessage
              name="transmissionType"
              component="span"
            />
          </div>
        </div>
        <div className="flex flex-col h-20 w-full">
          <label htmlFor="price" className="font-medium my-2">
            Price
          </label>
          <div className="flex w-full">
            <Field
              type="text"
              name="price"
              placeholder="Example: 10000"
              className={`w-full rounded-l-md border-backgroundGrey border-r-transparent border placeholder:text-textParagraph px-3 py-2 focus-visible:outline-none  ${
                errors.price && touched.price
                  ? "border-warningBorder text-warningText font-medium"
                  : ""
              }`}
            />
            <div
              className={`flex justify-center rounded-r-md px-4 bg-white  border-backgroundGrey border border-l-transparent focus-visible:outline  ${
                errors.price && touched.price
                  ? "border-warningBorder text-warningText font-medium "
                  : ""
              }`}
            >
              <img
                src={warningIcon.src}
                alt="warningIcon"
                className={`${
                  errors.price && touched.price ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className="h-3 text-warning">
            <ErrorMessage
              name="price"
              component="span"
            />
          </div>
        </div>
        </div>
        <div className="flex flex-row gap-10 items-center justify-center mt-2">
        <div className="flex flex-col h-24 w-full">
          <label htmlFor="image" className="font-medium my-2 ">
            Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="rounded-md border-backgroundGrey  bg-white border placeholder:text-textParagraph px-3 py-2 focus-visible:outline focus-visible:text-textTertiary"
            onChange={(event) =>
              setFieldValue(
                "image",
                event.currentTarget.files ? event.currentTarget.files[0] : null
              )
            }
          />
          
        
        <div className="h-3 text-warning w-full">
            <ErrorMessage
              name="image"
              component="span"
            />
        </div>
        </div>
        <div className="flex flex-row h-full gap-20 w-full  item-center">
            <ButtonPrimary title="Add Car" color="bg-tertiary" size="lg" onClick="" typeButton="submit"/>
            <ButtonPrimary title="Cancel" color="bg-secondary" size="lg" onClick="/" />
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

export default FormCarsFormik;
