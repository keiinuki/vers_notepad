import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";

export default function App () {
  return (
    <RecoilRoot>    
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </RecoilRoot>    
    );
};