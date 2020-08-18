'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var MaterialUi_Types = require("@jsiebern/bs-material-ui/src/MaterialUi_Types.bs.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");

function Timer(Props) {
  var limit = Props.limit;
  var match = React.useState(function () {
        return Time$FeedbackHelper.newDuration(undefined);
      });
  var setTime = match[1];
  var time = match[0];
  React.useEffect((function () {
          var id = setInterval((function (param) {
                  return Curry._1(setTime, (function (t) {
                                return Time$FeedbackHelper.add(t, {
                                            minutes: 0,
                                            seconds: 1
                                          });
                              }));
                }), 1000);
          return (function (param) {
                    clearInterval(id);
                    
                  });
        }), []);
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
                          }, "Feedback Helper"), React.createElement(Core.CircularProgress, {
                            value: MaterialUi_Types.$$Number.$$int(Caml_primitive.caml_int_min(100, Time$FeedbackHelper.percentage(time, limit))),
                            variant: "static"
                          }))
                }));
}

var make = Timer;

exports.make = make;
/* react Not a pure module */
