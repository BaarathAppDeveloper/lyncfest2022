/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hackathon from "./comp/Hackathon";
import Symp from "./symp/Symp";
import Table from "./comp/Table";
import Modal from "./comp/Modal";
import reportWebVitals from "./reportWebVitals";
import Details from "./symp/Loopup";
import Loopup from "./symp/Loopup";
import Link1 from "./symp/Link";
import Letter from "./symp/Letter";

import Quiz from "./symp/Quiz";
import Cliq from "./symp/Cliq";
import Legionz from "./symp/legionz";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      ></link>
      <div class="bg-white">
        <BrowserRouter>
          <Routes>
            <Route path="/hackathon" element={<Hackathon />} />
            <Route path="/lyncfest2022" element={<Symp />} />
            <Route path="hackathon/PS" element={<Table />} />
            <Route path="/hackathon/details" element={<Modal />} />
            <Route path="/link-to-link" element={<Link1 />} />
            <Route path="/letterbox" element={<Letter />} />
            <Route path="/le-inquizition" element={<Quiz />} />
            <Route path="/lets-cliq" element={<Cliq />} />
            <Route path="/loopup" element={<Loopup />} />
            <Route path="/legionz" element={<Legionz />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
