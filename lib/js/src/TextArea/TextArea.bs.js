'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var MaterialUi_TextField = require("@jsiebern/bs-material-ui/lib/js/src/MaterialUi_TextField.bs.js");

function TextArea(Props) {
  var time = Props.time;
  var match = React.useState(function () {
        return "";
      });
  var setText = match[1];
  var handleChange = function (e) {
    e.persist();
    var timeFormat = function (time) {
      return "[" + (Time$FeedbackHelper.format(time) + "] ");
    };
    var currText = e.target.value;
    var length = currText.length;
    if (length === 1) {
      console.log("HOla");
      var ans = $$String.concat("", {
            hd: timeFormat(time),
            tl: {
              hd: currText,
              tl: /* [] */0
            }
          });
      return Curry._1(setText, (function (param) {
                    return ans;
                  }));
    }
    if (Caml_string.get(currText, length - 1 | 0) !== /* "\n" */10) {
      return Curry._1(setText, (function (param) {
                    return currText;
                  }));
    }
    var ans$1 = $$String.concat("", {
          hd: currText,
          tl: {
            hd: timeFormat(time),
            tl: /* [] */0
          }
        });
    return Curry._1(setText, (function (param) {
                  return ans$1;
                }));
  };
  return React.createElement("div", {
              style: {
                padding: "10px"
              }
            }, React.createElement(Core.Card, {
                  children: React.createElement(Core.CardContent, {
                        children: React.createElement(Core.TextField, {
                              style: {
                                flexGrow: "1"
                              },
                              label: "Feedback",
                              multiline: true,
                              onChange: handleChange,
                              value: MaterialUi_TextField.Value.string(match[0]),
                              variant: "outlined"
                            }),
                        style: {
                          display: "flex"
                        }
                      })
                }));
}

var make = TextArea;

exports.make = make;
/* react Not a pure module */