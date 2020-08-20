'use strict';

var React = require("react");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var CircularProgressWithLabel$FeedbackHelper = require("../CircularProgressWithLabel/CircularProgressWithLabel.bs.js");

function TimerView(Props) {
  var time = Props.time;
  var limit = Props.limit;
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
                          }, "Feedback Helper"), React.createElement(CircularProgressWithLabel$FeedbackHelper.make, {
                            progress: Caml_primitive.caml_int_min(100, Time$FeedbackHelper.percentage(time, limit))
                          }))
                }));
}

var make = TimerView;

exports.make = make;
/* react Not a pure module */
