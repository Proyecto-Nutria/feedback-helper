'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var Util$FeedbackHelper = require("../Modules/Util.bs.js");
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
    var lastLine = "";
    var lastEnterPos = {
      contents: -1
    };
    if ($$String.contains(currText, /* "\n" */10)) {
      lastEnterPos.contents = $$String.rindex(currText, /* "\n" */10);
      lastLine = lastEnterPos.contents === (length - 1 | 0) ? "" : $$String.sub(currText, lastEnterPos.contents + 1 | 0, (length - 1 | 0) - lastEnterPos.contents | 0);
    } else {
      lastLine = currText;
    }
    if (Util$FeedbackHelper.exactMatch("\\[\\d+:\\d+\\]", lastLine)) {
      if (lastEnterPos.contents === -1) {
        return Curry._1(setText, (function (param) {
                      return "";
                    }));
      } else {
        return Curry._1(setText, (function (param) {
                      return $$String.sub(currText, 0, lastEnterPos.contents);
                    }));
      }
    }
    if (length === 1) {
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
  return React.createElement(Core.Card, {
              children: React.createElement(Core.CardContent, {
                    children: React.createElement(Core.TextField, {
                          style: {
                            width: "100%"
                          },
                          label: "Feedback",
                          multiline: true,
                          onChange: handleChange,
                          rows: MaterialUi_TextField.Rows.$$int(16),
                          value: MaterialUi_TextField.Value.string(match[0]),
                          variant: "outlined"
                        }),
                    style: {
                      width: "100%"
                    }
                  }),
              style: {
                display: "flex",
                width: "95%",
                justifyContent: "center"
              }
            });
}

var make = TextArea;

exports.make = make;
/* react Not a pure module */
