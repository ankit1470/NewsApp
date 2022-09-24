import "./App.css";

import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  // const pageSize = 5;
 // const apiKey = process.env.REACT_APP_NEWS_API;
    const apiKey = "66e4f6b7371247d3953ddea1a13ea8dc";
  // apiKey = "66e4f6b7371247d3953ddea1a13ea8dc";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
      <LoadingBar
        color="#f11946"
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)
        // }
      ></LoadingBar>
      {/* <News setProgress={setProgress} apiKey={apiKey} key="" pageSize={6} country="in" category="science"></News> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={6}
              country="in"
              category="general"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={6}
              country="in"
              category="business"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={6}
              country="in"
              category="entertainment"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general2"
              pageSize={6}
              country="in"
              category="general"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={6}
              country="in"
              category="health"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={6}
              country="in"
              category="science"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={6}
              country="in"
              category="sports"
            ></News>
          }
        ></Route>

        <Route
          exact
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={6}
              country="in"
              category="technology"
            ></News>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
