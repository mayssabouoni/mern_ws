import "./App.css";
import AddContact from "./Component/AddContact";
import { Switch, Route, Link } from "react-router-dom";
import ContactList from "./Component/ContactList";
import { Button } from "semantic-ui-react";
import EditContact from "./Component/EditContact";
function App() {
  return (
    <div className="App">
      <h2>Workshop MERN</h2>
      <Link to="/add">
        <Button inverted color="blue">
          ADD
        </Button>
      </Link>
      <Link to="/">
        <Button inverted color="blue">
          HOME
        </Button>
      </Link>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
}

export default App;
