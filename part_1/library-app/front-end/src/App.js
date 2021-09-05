import React, { useState } from "react";
import Route from "react-router-dom";
import "./App.css";
import axios from "axios";
import NewBook from "./components/NewBook";
import AllBooks from "./components/AllBooks";

const App = () => {
  const [title, settitle] = useState();
  const [author, setauthor] = useState();
  const [pages, setpages] = useState();
  const [publisher, setpublisher] = useState();
  const [published_at, setpublished_at] = useState();

  return (
    <>
      <Router>
        <Switch>
          <Route path="/library/create_book" component={NewBook} />

          <Route path="/library" component={AllBooks} />

          <Route path="/library/:book_id" component={GetBook} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
