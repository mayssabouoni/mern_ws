import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_FAIL,
  GET_ONE_CONTACT_SUCCESS,
} from "../constants/contacts";

import axios from "axios";
export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("http://localhost:5000/api/contact");
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error });
    console.log(error);
  }
};

export const addContact = (user) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/api/contact", user);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/contact/${id}`);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:5000/api/contact/${id}`);
    dispatch({ type: GET_ONE_CONTACT_SUCCESS, payload: result.data.response });
  } catch (error) {
    console.log(error);
  }
};

export const editContact = (id, user) => async (dispatch) => {
  try {
    let result = await axios.put(
      `http://localhost:5000/api/contact/${id}`,
      user
    );
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};
