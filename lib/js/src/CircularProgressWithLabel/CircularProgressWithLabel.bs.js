'use strict';

var React = require("react");
var MaterialUi_Types = require("@jsiebern/bs-material-ui/lib/js/src/MaterialUi_Types.bs.js");
var Core = require("@material-ui/core");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/lib/js/src/MaterialUi_Typography.bs.js");

function CircularProgressWithLabel(Props) {
  var progress = Props.progress;
  return React.createElement(Core.Box, {
              style: {
                display: "inline-flex",
                position: "relative"
              },
              children: null
            }, React.createElement(Core.CircularProgress, {
                  value: MaterialUi_Types.$$Number.$$int(progress),
                  variant: "static"
                }), React.createElement(Core.Box, {
                  style: {
                    bottom: "0",
                    display: "flex",
                    left: "0",
                    position: "absolute",
                    right: "0",
                    top: "0",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: React.createElement(Core.Typography, {
                        children: String(progress) + "%",
                        color: "textSecondary",
                        component: MaterialUi_Typography.Component.string("div"),
                        variant: "caption"
                      })
                }));
}

var make = CircularProgressWithLabel;

exports.make = make;
/* react Not a pure module */
