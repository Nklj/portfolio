import React from "react";
import ReactDOM from "react-dom";
import skillsData from "./data/skillsData";
import worksData from "./data/worksData";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App worksData={worksData} skillsData={skillsData} />
  </Router>,
  document.getElementById("root")
);
