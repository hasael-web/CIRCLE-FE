import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Profile from "@/pages/Follow";
import Follow from "@/pages/Profile";
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
          <Route index element={<Search />} />
        </Route>
        <Route path="/follow">
          <Route index element={<Follow />} />
        </Route>
        <Route path="/profile">
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
