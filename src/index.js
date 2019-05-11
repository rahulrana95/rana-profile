import React from "react";
import { render } from "react-snapshot";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//@TODO use extension pattern here or use react-ga
//<!-- Global site tag (gtag.js) - Google Analytics -->
const scriptTag = document.createElement("script");
scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=UA-139592028-1";
scriptTag.async = true;

const scriptTag1 = document.createElement("script");
scriptTag1.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-139592028-1');`;

document.getElementsByTagName("head")[0].append(scriptTag);
document.getElementsByTagName("head")[0].append(scriptTag1);

/**
 * Track following things:
 * 1. user browser, ip address, user agent string
 * 2. routes
 * 3. count
 * 4. Clicks:
 */

const MobileChecker = () => {
  if (window.screen.width < "800px") {
    return <div>It's not ready for mobile please come back later.</div>;
  }

  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<MobileChecker />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
