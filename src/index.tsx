import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot, useRecoilState } from "recoil";
import App from "./App";
import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
