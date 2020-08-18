'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Caml_string = require("bs-platform/lib/js/caml_string.js");

function lfill(str, width, value) {
  var strlen = str.length;
  if (strlen >= width) {
    return str;
  }
  var offset = width - strlen | 0;
  return $$String.init(width, (function (i) {
                if (i < offset) {
                  return value;
                } else {
                  return Caml_string.get(str, i - offset | 0);
                }
              }));
}

exports.lfill = lfill;
/* No side effect */
