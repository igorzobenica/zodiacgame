import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
  FirstPage,
  SecondPage,
  ThirdPage,
  FourthPage,
  FifthPage,
  SixthPage,
  SeventhPage,
  EighthPage,
  NinthPage,
  TenthPage,
} from "./containers";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/9" exact component={TenthPage} />
          <Route path="/8" exact component={NinthPage} />
          <Route path="/7" exact component={EighthPage} />
          <Route path="/6" exact component={SeventhPage} />
          <Route path="/5" exact component={SixthPage} />
          <Route path="/4" exact component={FifthPage} />
          <Route path="/3" exact component={FourthPage} />
          <Route path="/2" exact component={ThirdPage} />
          <Route path="/1" exact component={SecondPage} />
          <Route path="/" exact component={FirstPage} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
