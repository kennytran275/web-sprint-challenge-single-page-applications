import React from "react";
// We'll need React Router's own version of the History API
import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory();

  const routeToPizza = () => {
    history.push("/pizza");
  };

  return (
    <div>
      <button onClick={routeToPizza}>
        Custom Pizza Form
      </button>
    </div>
  );
}