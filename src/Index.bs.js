'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var FeedbackHelper$FeedbackHelper = require("./FeedbackHelper/FeedbackHelper.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(FeedbackHelper$FeedbackHelper.make, {}), "root");

/*  Not a pure module */
