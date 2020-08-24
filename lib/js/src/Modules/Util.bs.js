'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
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

function int_from_string(str) {
  if (str.length === 0) {
    return 0;
  } else {
    return Caml_format.caml_int_of_string(str);
  }
}

function exactMatch(pattern, str) {
  var match_ = str.match(new RegExp(pattern));
  if (match_ !== null) {
    return Caml_array.caml_array_get(match_, 0) === str;
  } else {
    return false;
  }
}

exports.lfill = lfill;
exports.int_from_string = int_from_string;
exports.exactMatch = exactMatch;
/* No side effect */
