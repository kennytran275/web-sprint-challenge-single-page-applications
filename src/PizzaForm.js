import React, { useState } from "react";
import Order from './Order';

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

export default function PizzaForm() {

  const [orders, setOrders] = useState(currentOrders);
  const [formValues, setFormValues] = useState(initialFormValues);

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
      role: formValues.role,
    };

    if (!newOrder.name || !newOrder.email) return;

    setOrders([...orders, newOrder]);

    setFormValues(initialFormValues);
  };
    return (
    <div>
      <h1>Form App</h1>
      <PizzaForm values={formValues} update={updateForm} submit={submitForm} />

      {orders.map((order) => {
        return <Order order={order}/>; 
      })}
      
    </div>
  );
  }