'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var TextArea$FeedbackHelper = require("../TextArea/TextArea.bs.js");
var TimerView$FeedbackHelper = require("../TimerView/TimerView.bs.js");

function FeedbackHelper(Props) {
  var match = React.useState(function () {
        return Time$FeedbackHelper.newDuration(undefined);
      });
  var setGTime = match[1];
  var gTime = match[0];
  React.useEffect((function () {
          var id = setInterval((function (param) {
                  return Curry._1(setGTime, (function (oldTime) {
                                return Time$FeedbackHelper.add(oldTime, {
                                            minutes: 0,
                                            seconds: 1
                                          });
                              }));
                }), 1000);
          return (function (param) {
                    clearInterval(id);
                    
                  });
        }), []);
  return React.createElement("div", undefined, React.createElement(TimerView$FeedbackHelper.make, {
                  time: gTime,
                  limit: {
                    minutes: 45,
                    seconds: 0
                  }
                }), React.createElement(TextArea$FeedbackHelper.make, {
                  time: gTime
                }));
}

var make = FeedbackHelper;

exports.make = make;
/* react Not a pure module */
