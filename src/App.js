import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.sass";
import "./CommonStyles.sass";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./components/NavbarBig/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contacts from "./components/Contacts/Contacts";
import SkillDescr from "./components/Skills/SkillDescr/SkillDescr";
import WorkDescr from "./components/Works/WorkDescr/WorkDescr";
import Loading from "./components/common/Loading/Loading";

function App(props) {
  const [preloader, hidePreloader] = useState(false);
  useState(() => {
    document.body.classList.add("lock");
    window.onload = () => {
      document.body.classList.remove("lock");
      hidePreloader(true);
    };
  }, []);
  const [paginator, showPaginator] = useState(false);
  const paginatorIsActive = (state) => {
    showPaginator(state);
  };

  return (
    <section className={`App ${paginator && "lock"}`}>
      <Navbar paginatorIsActive={paginatorIsActive} />
      <div className="container">
        <Routes>
          <Route exact path="/main" element={<Header />} />
          <Route exact path='*' element={<Header />}/>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route
            path="/skills/:skill"
            element={
              <SkillDescr skillsData={props.skillsData} paginator={paginator} />
            }
          />
          <Route path="/works" element={<Works />} />
          <Route
            path="/works/:work"
            element={
              <WorkDescr worksData={props.worksData} paginator={paginator} />
            }
          />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Loading preloader={preloader} />
    </section>
  );
}

export default App;
