import React from "react";

export default props => {
  console.log("props", props);
  console.log("props.values.email", props.values.email);
  return (
    <form onSubmit={props.onSubmit}>
      <label>Your e-mail</label>
      <input
        placeholder="email"
        type="text"
        name="email"
        value={props.values.email}
        onChange={props.onChange}
      ></input>
      <label>Password</label>
      <input
        placeholder="password"
        type="text"
        name="password"
        value={props.values.password}
        onChange={props.onChange}
      ></input>

      <input type="submit"></input>
    </form>
  );
};
