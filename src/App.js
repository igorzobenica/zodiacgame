import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
  PAGE_1,
  PAGE_2,
  PAGE_3,
  PAGE_4,
  PAGE_5,
  PAGE_6,
  PAGE_7,
  PAGE_8,
  PAGE_9
} from "./routeConstants";
import {
  StartPage,
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
  SixthPage,
  SeventhPage,
  EighthPage,
  NinthPage,
} from "./containers";

function App() {
  const base = '/:locale(en|es|mx)';
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={`${base}/${PAGE_9}`} exact component={NinthPage} />
          <Route path={`${base}/${PAGE_8}`} exact component={EighthPage} />
          <Route path={`${base}/${PAGE_7}`} exact component={SeventhPage} />
          <Route path={`${base}/${PAGE_6}`} exact component={SixthPage} />
          <Route path={`${base}/${PAGE_5}`} exact component={FifthPage} />
          <Route path={`${base}/${PAGE_4}`} exact component={FourthPage} />
          <Route path={`${base}/${PAGE_3}`} exact component={ThirdPage} />
          <Route path={`${base}/${PAGE_2}`} exact component={SecondPage} />
          <Route path={`${base}/${PAGE_1}`} exact component={FirstPage} />
          <Route path={`/:locale(en|es|mx)?`} exact component={StartPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
