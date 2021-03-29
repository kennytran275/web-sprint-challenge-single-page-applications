import React from "react";

export default function Order(props) {
  const { order } = props;

  return (
    <div id="orderData">
      Name: {`${order.name} `}
      Email: {`${order.email} `}
      Size: {`${order.pizzaSize} `}
      Special Instruction(s): {`${order.specialInstructions} `}
      Cheese: {`${order.cheese} `}
      Pepperoni: {`${order.pepperoni} `}
      Sausage: {`${order.sausage} `}
      Mushroom: {`${order.mushroom} `}
    </div>
  );
}
