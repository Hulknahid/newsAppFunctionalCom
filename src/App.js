import Navbar from "./component/Navbar/Navbar";
import News from "./component/News/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="general"
              key="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="business"
              key="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="entertainment"
              key="entertainment"
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="general"
              key="general"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="health"
              key="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="science"
              key="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="sports"
              key="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              pageSize={5}
              country="in"
              category="technology"
              key="technology"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
