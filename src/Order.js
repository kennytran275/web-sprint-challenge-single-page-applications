import React from "react";

export default function Order(props) {
  const { order } = props;

  return (
    <div>
      Name: {`${order.name} `}
      Email: {`${order.email} `}
    </div>
  );
}