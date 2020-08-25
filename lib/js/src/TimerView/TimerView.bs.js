'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var SettingsDialog$FeedbackHelper = require("../SettingsDialog/SettingsDialog.bs.js");
var CircularProgressWithLabel$FeedbackHelper = require("../CircularProgressWithLabel/CircularProgressWithLabel.bs.js");

function TimerView(Props) {
  var time = Props.time;
  var endTime = Props.endTime;
  var onUpdate = Props.onUpdate;
  var onPlay = Props.onPlay;
  var onPause = Props.onPause;
  var onReset = Props.onReset;
  var match = React.useState(function () {
        return true;
      });
  var setIsOnPause = match[1];
  var isOnPause = match[0];
  var match$1 = React.useState(function () {
        return false;
      });
  var setIsSettingsDialogOpen = match$1[1];
  var saveSettings = function (newTime, newEndTime) {
    Curry._2(onUpdate, newTime, newEndTime);
    return Curry._1(setIsSettingsDialogOpen, (function (param) {
                  return false;
                }));
  };
  return React.createElement(Core.AppBar, {
              children: null,
              position: "static",
              style: {
                background: "white"
              }
            }, React.createElement("div", {
                  style: {
                    height: "10px"
                  }
                }), React.createElement("div", {
                  style: {
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    justifyItems: "center"
                  }
                }, React.createElement("div", {
                      style: {
                        display: "flex"
                      }
                    }, React.createElement(Core.IconButton, {
                          onClick: (function (param) {
                              if (isOnPause) {
                                Curry._1(onPlay, undefined);
                                return Curry._1(setIsOnPause, (function (param) {
                                              return false;
                                            }));
                              } else {
                                Curry._1(onPause, undefined);
                                return Curry._1(setIsOnPause, (function (param) {
                                              return true;
                                            }));
                              }
                            }),
                          children: React.createElement(Core.Icon, {
                                children: isOnPause ? "play_arrow" : "pause"
                              }),
                          color: "primary"
                        })), React.createElement("div", {
                      style: {
                        width: "10px"
                      }
                    }), React.createElement("div", {
                      style: {
                        display: "flex"
                      }
                    }, React.createElement(CircularProgressWithLabel$FeedbackHelper.make, {
                          progress: Caml_primitive.caml_int_min(100, Time$FeedbackHelper.percentage(time, endTime)),
                          label: Time$FeedbackHelper.format(time)
                        })), React.createElement("div", {
                      style: {
                        width: "10px"
                      }
                    }), React.createElement("div", {
                      style: {
                        display: "flex",
                        height: "120%",
                        flexDirection: "column",
                        justifyContent: "space-between"
                      }
                    }, React.createElement(Core.IconButton, {
                          onClick: (function (param) {
                              Curry._1(onPause, undefined);
                              Curry._1(setIsOnPause, (function (param) {
                                      return true;
                                    }));
                              return Curry._1(setIsSettingsDialogOpen, (function (param) {
                                            return true;
                                          }));
                            }),
                          children: React.createElement(Core.Icon, {
                                children: "settings"
                              })
                        }), React.createElement(Core.IconButton, {
                          onClick: (function (param) {
                              Curry._1(onReset, undefined);
                              return Curry._1(setIsOnPause, (function (param) {
                                            return true;
                                          }));
                            }),
                          children: React.createElement(Core.Icon, {
                                children: "replay"
                              }),
                          color: "secondary"
                        }))), React.createElement("div", {
                  style: {
                    height: "10px"
                  }
                }), React.createElement(SettingsDialog$FeedbackHelper.make, {
                  open: match$1[0],
                  currentTime: time,
                  currentEndTime: endTime,
                  onSave: saveSettings
                }));
}

var make = TimerView;

exports.make = make;
/* react Not a pure module */
