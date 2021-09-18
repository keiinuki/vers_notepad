import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Notepad } from "../pages/Notepad";
import { PastArticles } from "../pages/PastArticles";
import { Page404 } from "../pages/Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/notepad"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={`${url}`}>
              <Notepad />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      ></Route>
      <Route
        path="/pastarticles"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={`${url}`}>
              <PastArticles />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      ></Route>
      <Route path="/*">
        <Page404 />
      </Route>
    </Switch>
  );
};

