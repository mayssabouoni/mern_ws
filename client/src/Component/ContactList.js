import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/actions/contactAction";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import Contact from "./Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loadContacts = useSelector(
    (state) => state.contactReducer.loadContacts
  );

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {loadContacts ? (
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        </div>
      ) : (
        contacts.map((el) => {
          return <Contact key={el._id} el={el} />;
        })
      )}
    </div>
  );
};

export default ContactList;
