import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            {/* <AllSpots /> */}
          </Route>
          {/* <Route path="/spots/new">
            <NewSpotForm />
          </Route>
          <Route path="/spots/current">
            <CurrentUserSpots />
          </Route>
          <Route path="/spots/:spotId/edit">
            <EditSpotForm />
          </Route>
          <Route path="/spots/:spotId">
            <SpotShow />
          </Route>
          <Route>Page not found</Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
