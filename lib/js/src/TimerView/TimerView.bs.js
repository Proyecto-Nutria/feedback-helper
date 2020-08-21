'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var CircularProgressWithLabel$FeedbackHelper = require("../CircularProgressWithLabel/CircularProgressWithLabel.bs.js");

function TimerView(Props) {
  var time = Props.time;
  var limit = Props.limit;
  var onPlay = Props.onPlay;
  var onPause = Props.onPause;
  var onReset = Props.onReset;
  return React.createElement("div", {
              style: {
                padding: "10px"
              }
            }, React.createElement(Core.Card, {
                  children: React.createElement(Core.CardContent, {
                        children: null,
                        style: {
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }
                      }, React.createElement("div", {
                            style: {
                              background: "lightgray",
                              display: "flex",
                              padding: "5px",
                              borderRadius: "5px",
                              alignItems: "center",
                              flexDirection: "column",
                              justifyContent: "center"
                            }
                          }, Time$FeedbackHelper.format(time)), React.createElement("div", {
                            style: {
                              display: "flex"
                            }
                          }, React.createElement(Core.ButtonGroup, {
                                children: null,
                                color: "primary",
                                variant: "contained"
                              }, React.createElement(Core.Button, {
                                    onClick: (function (param) {
                                        return Curry._1(onPause, undefined);
                                      }),
                                    children: React.createElement(Core.Icon, {
                                          children: "pause"
                                        })
                                  }), React.createElement(Core.Button, {
                                    onClick: (function (param) {
                                        return Curry._1(onPlay, undefined);
                                      }),
                                    children: React.createElement(Core.Icon, {
                                          children: "play_arrow"
                                        })
                                  }), React.createElement(Core.Button, {
                                    onClick: (function (param) {
                                        return Curry._1(onReset, undefined);
                                      }),
                                    children: React.createElement(Core.Icon, {
                                          children: "replay"
                                        })
                                  }))), React.createElement(CircularProgressWithLabel$FeedbackHelper.make, {
                            progress: Caml_primitive.caml_int_min(100, Time$FeedbackHelper.percentage(time, limit)),
                            label: Time$FeedbackHelper.format(time)
                          }))
                }));
}

var make = TimerView;

exports.make = make;
/* react Not a pure module */
