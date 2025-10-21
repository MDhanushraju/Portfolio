
import ReactDom from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "https://mdhanushraju.github.io/Portfolio/assets"


import "./App.css"

import App from "./App";
let rootele = document.getElementById("root");

let root = ReactDom.createRoot(rootele);
root.render(<App/>);