import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from './App';
const root = createRoot(document.getElementById("app"))
root.render(<StrictMode><App/></StrictMode>)

// this is the boiler plate for a react app