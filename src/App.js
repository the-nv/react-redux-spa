import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./components/HomePage";
import Interviews from "./components/interviews/Interviews";
import InterviewShow from "./components/interviews/InterviewShow";
import InterviewsNew from "./components/interviews/InterviewsNew";
import InterviewEdit from "./components/interviews/InterviewEdit";
import InterviewDelete from "./components/interviews/InterviewDelete";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path="/interviews/new"
            component={InterviewsNew}
          />
          <Route
            path="/interviews/:interviewId/edit"
            component={InterviewEdit}
          />
          <Route
            path="/interviews/:interviewId/delete"
            component={InterviewDelete}
          />
          <Route
            exact
            path="/interviews/:interviewId"
            component={InterviewShow}
          />
          <Route exact path="/interviews" component={Interviews} />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
