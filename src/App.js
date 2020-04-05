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
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
  SixthPage,
  SeventhPage,
  EighthPage,
  NinthPage
} from "./containers";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={PAGE_9} exact component={NinthPage} />
          <Route path={PAGE_8} exact component={EighthPage} />
          <Route path={PAGE_7} exact component={SeventhPage} />
          <Route path={PAGE_6} exact component={SixthPage} />
          <Route path={PAGE_5} exact component={FifthPage} />
          <Route path={PAGE_4} exact component={FourthPage} />
          <Route path={PAGE_3} exact component={ThirdPage} />
          <Route path={PAGE_2} exact component={SecondPage} />
          <Route path={PAGE_1} exact component={FirstPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
