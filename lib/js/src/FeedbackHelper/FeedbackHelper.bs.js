'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var TextArea$FeedbackHelper = require("../TextArea/TextArea.bs.js");
var TimerView$FeedbackHelper = require("../TimerView/TimerView.bs.js");

function FeedbackHelper(Props) {
  var match = React.useState(function () {
        return Time$FeedbackHelper.newDuration(undefined);
      });
  var setGTime = match[1];
  var gTime = match[0];
  var match$1 = React.useState(function () {
        return false;
      });
  var setIsTimerActive = match$1[1];
  var isTimerActive = match$1[0];
  React.useEffect((function () {
          var intervalId;
          if (isTimerActive) {
            intervalId = Caml_option.some(setInterval((function (param) {
                        return Curry._1(setGTime, (function (oldTime) {
                                      return Time$FeedbackHelper.add(oldTime, {
                                                  minutes: 0,
                                                  seconds: 1
                                                });
                                    }));
                      }), 1000));
          } else if (!isTimerActive) {
            var a = intervalId;
            if (a !== undefined) {
              Caml_option.valFromOption(a);
            }
            
          }
          var a$1 = intervalId;
          if (a$1 === undefined) {
            return ;
          }
          var a$2 = Caml_option.valFromOption(a$1);
          return (function (param) {
                    clearInterval(a$2);
                    
                  });
        }), [isTimerActive]);
  var onPlay = function (param) {
    return Curry._1(setIsTimerActive, (function (param) {
                  return true;
                }));
  };
  var onPause = function (param) {
    return Curry._1(setIsTimerActive, (function (param) {
                  return false;
                }));
  };
  var onReset = function (param) {
    Curry._1(setGTime, (function (param) {
            return Time$FeedbackHelper.newDuration(undefined);
          }));
    return Curry._1(setIsTimerActive, (function (param) {
                  return false;
                }));
  };
  return React.createElement("div", undefined, React.createElement(TimerView$FeedbackHelper.make, {
                  time: gTime,
                  limit: {
                    minutes: 45,
                    seconds: 0
                  },
                  onPlay: onPlay,
                  onPause: onPause,
                  onReset: onReset
                }), React.createElement(TextArea$FeedbackHelper.make, {
                  time: gTime
                }));
}

var make = FeedbackHelper;

exports.make = make;
/* react Not a pure module */
