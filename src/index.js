import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./assets/css/gwos.css";
import "./assets/css/netflix_carousel.css";
import "./assets/css/trix.css";
import "./assets/css/card.css";


ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
