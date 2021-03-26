import React from "react";

export default function MemberForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
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

        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}