import React, { Suspense, useState } from "react";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./context/UserDetailContext";
import { MantineProvider } from "@mantine/core";
import Bookings from "./pages/Bookings/Bookings";
function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div>loading....</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Website />} />
                  <Route path="/properties">
                    <Route index element={<Properties />} />
                    <Route path=":propertyId" element={<Property />} />
                  </Route>
                  <Route path="/bookings" element={<Bookings />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          <ToastContainer />
          <ReactQueryDevtools initialOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
