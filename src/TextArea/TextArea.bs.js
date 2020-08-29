'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");
var ClipboardJs = require("./Clipboard.js");
var Core = require("@material-ui/core");
var Time$FeedbackHelper = require("../Modules/Time.bs.js");
var Util$FeedbackHelper = require("../Modules/Util.bs.js");
var MaterialUi_TextField = require("@jsiebern/bs-material-ui/src/MaterialUi_TextField.bs.js");

function copyToClipboard(prim, prim$1) {
  ClipboardJs.default(prim, prim$1);
  
}

function TextArea(Props) {
  var time = Props.time;
  var match = React.useState(function () {
        return "";
      });
  var setText = match[1];
  var text = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setInterviewerName = match$1[1];
  var interviewerName = match$1[0];
  var match$2 = React.useState(function () {
        return "";
      });
  var setProblems = match$2[1];
  var problems = match$2[0];
  var scrollableDiv = React.createRef();
  var fullScrollBottom = function (param) {
    var nullableCurrElem = scrollableDiv.current;
    if (!(nullableCurrElem == null)) {
      nullableCurrElem.scrollTop = nullableCurrElem.scrollHeight;
      return ;
    }
    
  };
  var handleChange = function (e) {
    e.persist();
    fullScrollBottom(undefined);
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
    if (!(length > 0 && Caml_string.get(currText, length - 1 | 0) === /* "\n" */10)) {
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
  var getInfo = function (param) {
    var problemsFormatted = problems.split(";").join("\n");
    return "Interviewer: " + (interviewerName + ("\n\nProblems: \n" + (problemsFormatted + "\n\n")));
  };
  var getFormattedInfo = function (param) {
    var problemsFormatted = problems.split(";").join("\n");
    return "<b>Interviewer:</b> " + (interviewerName + ("\n\n<b>Problems:</b>\n" + (problemsFormatted + "\n\n")));
  };
  return React.createElement("div", {
              style: {
                display: "flex",
                minHeight: "0",
                overflowY: "auto",
                width: "98%",
                alignItems: "center",
                flex: "1",
                flexDirection: "column"
              }
            }, React.createElement("div", {
                  ref: scrollableDiv,
                  style: {
                    display: "flex",
                    minHeight: "0",
                    overflowY: "auto",
                    width: "100%",
                    flex: "1",
                    justifyContent: "center"
                  }
                }, React.createElement("div", {
                      style: {
                        width: "100%"
                      }
                    }, React.createElement(Core.Card, {
                          children: React.createElement(Core.CardContent, {
                                children: null
                              }, React.createElement("div", {
                                    style: {
                                      display: "flex",
                                      paddingBottom: "5px",
                                      flex: "1",
                                      flexWrap: "wrap"
                                    }
                                  }, React.createElement("div", {
                                        style: {
                                          display: "flex",
                                          padding: "2px 3px 7px 3px",
                                          alignItems: "center",
                                          flexGrow: "1",
                                          justifyContent: "center"
                                        }
                                      }, React.createElement(Core.TextField, {
                                            style: {
                                              color: "white",
                                              display: "flex",
                                              flex: "1"
                                            },
                                            label: "Interviewer",
                                            onChange: (function (e) {
                                                e.persist();
                                                return Curry._1(setInterviewerName, (function (param) {
                                                              return e.target.value;
                                                            }));
                                              }),
                                            placeholder: "Nutria",
                                            value: MaterialUi_TextField.Value.string(interviewerName),
                                            variant: "outlined"
                                          })), React.createElement("div", {
                                        style: {
                                          display: "flex",
                                          padding: "2px 3px 7px 3px",
                                          alignItems: "center",
                                          flexGrow: "50",
                                          justifyContent: "center"
                                        }
                                      }, React.createElement(Core.TextField, {
                                            style: {
                                              display: "flex",
                                              flex: "1"
                                            },
                                            label: "Problems",
                                            onChange: (function (e) {
                                                e.persist();
                                                return Curry._1(setProblems, (function (param) {
                                                              return e.target.value;
                                                            }));
                                              }),
                                            placeholder: "link1;link2;my own description (separate with semicolon)",
                                            value: MaterialUi_TextField.Value.string(problems),
                                            variant: "outlined"
                                          }))), React.createElement(Core.TextField, {
                                    style: {
                                      width: "100%"
                                    },
                                    label: "Feedback",
                                    multiline: true,
                                    onChange: handleChange,
                                    placeholder: "\n  Prepend your comment with \"+\" if it is a positive comment or with \"-\" if it is a negative comment\n\n  Example:\n\n  [02:00] + Interesting introduction of herself\n  [05:00] / At this point I finished explaining the problem to the interviewee\n  [06:20] - Gave an idea before asking fundamental questions\n  ",
                                    value: MaterialUi_TextField.Value.string(text),
                                    variant: "outlined"
                                  }), React.createElement("div", {
                                    style: {
                                      height: "20px"
                                    }
                                  }), React.createElement(Core.Button, {
                                    onClick: (function (param) {
                                        var prim = getInfo(undefined) + ("Feedback:\n" + text);
                                        var prim$1 = Util$FeedbackHelper.prettifyText(getFormattedInfo(undefined) + ("<b>Feedback:</b>\n" + text));
                                        ClipboardJs.default(prim$1, prim);
                                        
                                      }),
                                    style: {
                                      width: "100%"
                                    },
                                    children: "Copy to clipboard",
                                    color: "primary",
                                    variant: "contained"
                                  }), React.createElement("div", {
                                    style: {
                                      height: "10px"
                                    }
                                  }))
                        }))));
}

var make = TextArea;

exports.copyToClipboard = copyToClipboard;
exports.make = make;
/* react Not a pure module */
