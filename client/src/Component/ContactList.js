import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contactAction";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts)
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return <div>Contact List</div>;
};

export default ContactList;
