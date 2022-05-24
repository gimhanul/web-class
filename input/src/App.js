import React from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "unemployed",
    favColor: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form className="App">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <textarea
        value={formData.comments}
        name="comments"
        placeholder="Comments"
        onChange={handleChange}
      />
      <input
        type="checkbox"
        value={formData.isFriendly}
        name="isFriendly"
        onChange={handleChange}
        id="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>

      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">--choose--</option>
        <option value="red">red</option>
        <option value="orange">orange</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>

      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </form>
  );
}
