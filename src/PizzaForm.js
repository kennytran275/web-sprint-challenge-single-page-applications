import React, { useState, useEffect } from "react";
import Order from "./Order";
import Pizza from "./Pizza";
import * as yup from "yup";
import schema from "./formSchema";

const initialFormValues = {
  // text
  name: "",
  email: "",
  specialInstructions: "",
  //dropdown
  pizzaSize: "",
  //checkboxes
  cheese: false,
  pepperoni: false,
  sausage: false,
  mushroom: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  specialInstructions: "",
  pizzaSize: "",
};

const currentOrders = [
  {
    name: "Kenny Tran",
    email: "kenny@kenny.com",
    specialInstructions: "none",
    pizzaSize: "large",
    cheese: true,
    pepperoni: true,
    sausage: true,
    mushroom: false,
  },
];

const initialDisabled = true;

export default function PizzaForm() {
  const [orders, setOrders] = useState(currentOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
    };

    setOrders([...orders, newOrder]);

    setFormValues(initialFormValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  
  return (
    <div>
      <h1>Form App</h1>
      <Pizza
        values={formValues}
        update={updateForm}
        submit={submitForm}
        change={inputChange}
        disabled={disabled}
      />

      {orders.map((order) => {
        return <Order order={order} />;
      })}
    </div>
  );
}
