import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Follow from "@/pages/Follow";
import Profile from "@/pages/Profile";
import Main from "@/layout/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Main>
                <Home />
              </Main>
            }
          />
        </Route>
        <Route path="/search">
          <Route
            index
            element={
              <Main>
                <Search />
              </Main>
            }
          />
        </Route>
        <Route path="/follow">
          <Route
            index
            element={
              <Main>
                <Follow />
              </Main>
            }
          />
        </Route>
        <Route path="/profile">
          <Route
            index
            element={
              <Main>
                <Profile />
              </Main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
