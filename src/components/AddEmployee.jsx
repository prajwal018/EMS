import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { EmployeeContext } from "../context/EmployeeContext";
import * as Yup from "yup";
import { toast } from "react-toastify";

const AddEmployee = () => {
  const { addEmployee } = React.useContext(EmployeeContext);

  // Define the initial values for the form
  const initialValues = {
    emp_name: "",
    emp_role: "",
    emp_id: "",
    emp_address: { area: "", city: "", country: "", zip: "" },
    emp_contact: [{ contact_method: "EMAIL", value: "" }],
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    emp_name: Yup.string().required("Employee name is required"),
    emp_role: Yup.string().required("Employee role is required"),
    emp_id: Yup.string()
      .required("Employee ID is required")
      .matches(/^[0-9]{8}$/, "Invalid Employee Id, must be 8 digits"),
    emp_address: Yup.object({
      area: Yup.string().required("Area is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      zip: Yup.string()
        .required("Zip Code is required")
        .matches(/^[0-9]{6}$/, "Invalid Zip Code, must be 5 digits"),
    }),
    emp_contact: Yup.array()
      .of(
        Yup.object().shape({
          contact_method: Yup.string()
            .oneOf(["EMAIL", "MOBILE"])
            .required("Contact method is required"),
          value: Yup.string().when("contact_method", {
            is: "EMAIL",
            then: () =>
              Yup.string().email("Invalid email").required("Email Required"),
            otherwise: () =>
              Yup.string().matches(
                /^[0-9]{10}$/,
                "Invalid Mobile number, must be 10 digits"
              ),
          }),
        })
      )
      .min(1, "At least one contact method is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addEmployee(values);
      resetForm();
      toast.success("Employee added successfully!");
    } catch (error) {
      toast.error(`Error adding employee: ${error.message}`);
    }
  };

  return (
    <div className=" mx-auto p-6 rounded-md">
      <div className="flex justify-center">
        <div className="text-xl font-bold mb-4">Add Employee</div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <label
                  htmlFor="emp_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <Field
                  type="text"
                  name="emp_name"
                  id="emp_name"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="emp_role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role:
                </label>
                <Field
                  type="text"
                  name="emp_role"
                  id="emp_role"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_role"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="emp_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Employee ID:
                </label>
                <Field
                  type="text"
                  name="emp_id"
                  id="emp_id"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_id"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  htmlFor="emp_address.area"
                  className="block text-sm font-medium text-gray-700"
                >
                  Area:
                </label>
                <Field
                  type="text"
                  name="emp_address.area"
                  id="emp_address.area"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_address.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_address.area"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="emp_address.city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City:
                </label>
                <Field
                  type="text"
                  name="emp_address.city"
                  id="emp_address.city"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_address.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_address.city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="emp_address.country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country:
                </label>
                <Field
                  type="text"
                  name="emp_address.country"
                  id="emp_address.country"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_address.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_address.country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="emp_address.zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code:
                </label>
                <Field
                  type="text"
                  name="emp_address.zip"
                  id="emp_address.zip"
                  className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  value={values.emp_address.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="emp_address.zip"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="">
              {values.emp_contact.map((contact, index) => (
                <div key={index} className="w-full grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor={`emp_contact.${index}.contact_method`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact:
                    </label>
                    <Field
                      as="select"
                      name={`emp_contact.${index}.contact_method`}
                      id={`emp_contact.${index}.contact_method`}
                      className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      value={contact.contact_method}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="EMAIL">EMAIL</option>
                      <option value="MOBILE">MOBILE</option>
                    </Field>
                    <ErrorMessage
                      name={`emp_contact.${index}.contact_method`}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`emp_contact.${index}.value`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Value:
                    </label>
                    <Field
                      type="text"
                      name={`emp_contact.${index}.value`}
                      id={`emp_contact.${index}.value`}
                      className="mt-1 block w-full px-3 py-2 border-2 bg-gray-100 border-gray-400 rounded-full shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      value={contact.value}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name={`emp_contact.${index}.value`}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setFieldValue("emp_contact", [
                    ...values.emp_contact,
                    { contact_method: "EMAIL", value: "" },
                  ]);
                }}
                className="px-4 py-1 bg-gray-800 text-white text-right rounded-full hover:bg-gray-600"
              >
                +
              </button>
            </div>
            <button
              type="submit"
              className="mt-4 bg-gray-950 w-full text-white px-4 py-2 rounded-full hover:bg-sky-800"
            >
              Add Employee
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddEmployee;
