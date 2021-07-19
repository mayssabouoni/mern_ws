import React, { useState } from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addContact } from "../JS/actions/contactAction";
import { useHistory } from "react-router-dom";

const sizes = ["large"];

const AddContact = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [user, setUser] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(user));
    setUser({ name: "", phone: "", email: "" });
    history.push("/");
  };
  return (
    <div>
      {sizes.map((size) => (
        <Form size={size} key={size} onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              label="Name"
              name="name"
              value={user.name}
              control="input"
              placeholder="Name"
              onChange={handleChange}
            />
            <Form.Field
              label="Email"
              control="input"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <Form.Field
              label="Phone Number"
              control="input"
              value={user.phone}
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Divider hidden />
        </Form>
      ))}
    </div>
  );
};

export default AddContact;
