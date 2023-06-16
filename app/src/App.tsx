import React, { lazy, Suspense } from "react";
import { Navbar, Layout, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "./components";
import { Loading } from "./components";

const Home = lazy(() => import("./containers/home"));
const RandomBird = lazy(() => import("./containers/RandomBird"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="random" element={<RandomBird />} />
              </Route>
            </Routes>
          </ErrorBoundary>
        </Suspense>
      <Footer />
    </div>
  );
}

export default App;
