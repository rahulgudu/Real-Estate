import React, { Suspense } from "react";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;