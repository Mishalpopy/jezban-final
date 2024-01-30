import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
// internal
import ScrollTop from "./components/common/ScrollTop";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollTop />
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
    
  </BrowserRouter>
);
<div>
<script src="https://dashboard.chatfuel.com/integration/landing-wa-widget.js" async defer data-prefilled="Hey" data-welcome="Hello, Welcome To Jezben Pest Control Service" data-phone="971507107126"></script>
<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-2f63e15a-9fa7-49bd-825f-81c5665f2fbd" data-elfsight-app-lazy></div>
</div>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
