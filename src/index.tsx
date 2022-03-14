import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./component/App";
import Test from "./component/Test";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
