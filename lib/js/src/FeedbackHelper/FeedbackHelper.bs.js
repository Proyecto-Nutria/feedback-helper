'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
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
        return {
                minutes: 45,
                seconds: 0
              };
      });
  var setEndTime = match$1[1];
  var match$2 = React.useState(function () {
        return Date.now();
      });
  var setStartingPointInTime = match$2[1];
  var startingPointInTime = match$2[0];
  var match$3 = React.useState(function () {
        return false;
      });
  var setIsTimerActive = match$3[1];
  var isTimerActive = match$3[0];
  React.useEffect((function () {
          var intervalId;
          if (isTimerActive) {
            intervalId = Caml_option.some(setInterval((function (param) {
                        return Curry._1(setGTime, (function (param) {
                                      return Time$FeedbackHelper.normalize({
                                                  minutes: 0,
                                                  seconds: (Date.now() - startingPointInTime) / 1000.0 | 0
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
    if (Caml_obj.caml_equal(gTime, Time$FeedbackHelper.newDuration(undefined))) {
      Curry._1(setStartingPointInTime, (function (param) {
              return Date.now();
            }));
    } else {
      Curry._1(setStartingPointInTime, (function (param) {
              return Date.now() - Time$FeedbackHelper.toMilliseconds(gTime);
            }));
    }
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
    Curry._1(setIsTimerActive, (function (param) {
            return false;
          }));
    return Curry._1(setGTime, (function (param) {
                  return Time$FeedbackHelper.newDuration(undefined);
                }));
  };
  var updateTimes = function (newTime, newEndTime) {
    Curry._1(setGTime, (function (param) {
            return newTime;
          }));
    return Curry._1(setEndTime, (function (param) {
                  return newEndTime;
                }));
  };
  return React.createElement("div", {
              style: {
                display: "flex",
                height: "100%",
                overflowY: "auto",
                width: "100%",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }
            }, React.createElement(TimerView$FeedbackHelper.make, {
                  time: gTime,
                  endTime: match$1[0],
                  onUpdate: updateTimes,
                  onPlay: onPlay,
                  onPause: onPause,
                  onReset: onReset
                }), React.createElement("div", {
                  style: {
                    height: "10px"
                  }
                }), React.createElement(TextArea$FeedbackHelper.make, {
                  time: gTime
                }), React.createElement("div", {
                  style: {
                    height: "15px"
                  }
                }));
}

var make = FeedbackHelper;

exports.make = make;
/* react Not a pure module */
