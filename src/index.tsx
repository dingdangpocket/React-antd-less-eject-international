import ReactDOM from "react-dom";
// import axios from "axios";
// import "antd/dist/antd.css"
import "./http/axios";
import { HashRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// axios.defaults.baseURL = "https://api.apiopen.top";
var mountNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <Router>
        <App name="DingDang" />
      </Router>
    </ContextProvider>
  </Provider>,
  mountNode
);
reportWebVitals();
