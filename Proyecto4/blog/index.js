import { StrictMode } from "react";
import ReactDOM from "react-dom";
import inte from "./inte";

const rootElement=document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <inte />
    </StrictMode>,
    rootElement
);