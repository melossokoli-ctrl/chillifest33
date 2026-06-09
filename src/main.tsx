import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Intro from "./Intro";
import PrivateGate from "./PrivateGate";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivateGate>
      <Intro>
        <App />
      </Intro>
    </PrivateGate>
  </StrictMode>,
);
