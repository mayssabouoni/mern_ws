import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_ONE_CONTACT_SUCCESS,
} from "../constants/contacts";

const initialeState = {
  contacts: [],
  error: null,
  loadContacts: false,
  contact: {},
};

export const contactReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, loadContacts: true };

    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };

    case GET_CONTACTS_FAIL:
      return { ...state, error: payload, loadContacts: false };
    case GET_ONE_CONTACT_SUCCESS:
      return { ...state, contact: payload };

    default:
      return state;
  }
};
