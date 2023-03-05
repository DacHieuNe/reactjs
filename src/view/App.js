import React from "react";
import { Switch , Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./Home/Home";
import Posts from "./Posts/Posts";
import Status from "./Status/Status";
import Navigator from "./Nav/Nav";
import DetailPosts from "./Posts/DetailPosts";
import ReactForm from "./ReactForm/ReactForm";
import OTP from "./OTP/OTP";
import Error from "./Error/Error";
const theme = {
  "one-color": "#d1e8ff",
  "two-color": "#95bee6"
}

const App = (props) => {
  // Custom hook
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Navigator />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/posts" component={Posts} exact/>
          <Route path="/posts/:id" component={DetailPosts}/>
          <Route path="/status" component={Status}/>
          <Route path="/form" component={ReactForm} />
          <Route path="/otp" component={OTP} />
          {/* <Route component={Error} /> */}
        </Switch>
      </div>
      </ThemeProvider>
  );
};

App.propTypes = {
  
};

export default App;