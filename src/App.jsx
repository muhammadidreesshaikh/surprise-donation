import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { STUDENT_ROUTES, AUTH_ROUTES } from "./routes";

import MainLayout from "./components/layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {AUTH_ROUTES?.map((route) => {
          // If route has children, create nested routes
          if (route.children) {
            return (
              <Route key={route.id} path={route.path} element={route.component}>
                {/* Map through children routes */}
                {route.children.map((child, idx) => {
                  if (child.index) {
                    // Index route (default child)
                    return (
                      <Route
                        key={`${route.id}-child-${idx}`}
                        index
                        element={child.component}
                      />
                    );
                  }
                  // Regular child route
                  return (
                    <Route
                      key={`${route.id}-child-${idx}`}
                      path={child.path}
                      element={child.component}
                    />
                  );
                })}
              </Route>
            );
          }

          // Regular route without children
          return (
            <Route key={route.id} path={route.path} element={route.component} />
          );
        })}
        {STUDENT_ROUTES?.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              route.component ? (
                <MainLayout>{route.component}</MainLayout>
              ) : null
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
