'use strict';

var React = require("react");
var Timer$FeedbackHelper = require("../Timer/Timer.bs.js");

function FeedbackHelper(Props) {
  return React.createElement(Timer$FeedbackHelper.make, {
              limit: {
                minutes: 1,
                seconds: 0
              }
            });
}

var make = FeedbackHelper;

exports.make = make;
/* react Not a pure module */
