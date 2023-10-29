import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@/layout/Main";
import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";
import FollowPage from "@/pages/FollowPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Main>
                <HomePage />
              </Main>
            }
          />
        </Route>
        <Route path="/search">
          <Route
            index
            element={
              <Main>
                <SearchPage />
              </Main>
            }
          />
        </Route>
        <Route path="/follow">
          <Route
            index
            element={
              <Main>
                <FollowPage />
              </Main>
            }
          />
        </Route>
        <Route path="/profile">
          <Route
            index
            element={
              <Main>
                <ProfilePage />
              </Main>
            }
          />
        </Route>
        <Route path="/register">
          <Route index element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
