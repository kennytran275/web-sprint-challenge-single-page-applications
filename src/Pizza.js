import React from "react";

export default function MemberForm(props) {
  const { values, disabled, submit, change } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
    debugger;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          {`Full Name `}
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
            placeholder="type your full name"
          />
        </label>

        <label>
          {` Email `}
          <input
            name="email"
            value={values.email}
            type="email"
            onChange={onChange}
            placeholder="type your email"
          />
        </label>

        <label>
          {` Select your pizza size `}
          <select name="pizzaSize" value={values.pizzaSize} onChange={onChange}>
            <option value="">------select size------</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        <label>
          {` Special Instructions `}
          <input
            name="specialInstructions"
            value={values.specialInstructions}
            type="text"
            onChange={onChange}
          />
        </label>

        <div>
          <h4>Toppings</h4>
          <label>
            Cheese
            <input
              type="checkbox"
              name="cheese"
              checked={values.cheese}
              onChange={onChange}
            />
          </label>

          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>

          <label>
            Mushroom
            <input
              type="checkbox"
              name="mushroom"
              checked={values.mushroom}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="submit">
          <button id="submitBtn" disabled={disabled}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
