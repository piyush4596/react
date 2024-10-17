import { useState } from "react";

export default function Form() {
  //   let [fullName, setFullName] = useState("");
  //   let handleNameChange = (event) => {
  //     console.log(event.target.value);
  //     setFullName(event.target.value);
  //   };

  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  let handleChangeInput = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      currData[fieldName] = newValue;
      return { ...currData };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.fullName}
        onChange={handleChangeInput}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="userName">Full Name</label>
      <input
        placeholder="enter your user name"
        type="text"
        value={formData.userName}
        onChange={handleChangeInput}
        id="userName"
        name="userName"
      />
      <button>Submit</button>
    </form>
  );
}
