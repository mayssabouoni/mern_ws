import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteContact, getContact } from "../JS/actions/contactAction";
const Contact = ({ el }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(el._id));
  };
  const handleGet = () => {
    dispatch(getContact(el._id));
  };
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxife93oFOT5d-EG7rqvwjOaaV08NJlsSmbfc1akMykg_9ZpSPi3-zC5tk3jIXniRDRI&usqp=CAU"
            />
            <Card.Header>{el.name}</Card.Header>
            <Card.Meta>{el.email}</Card.Meta>
            <Card.Description>
              {el.name} wants to add you to the group{" "}
              <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Link to={`/edit/${el._id}`}>
                <Button basic color="green" onClick={handleGet}>
                  Edit
                </Button>
              </Link>
              <Button basic color="red" onClick={handleDelete}>
                Remove
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Contact;
