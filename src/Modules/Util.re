let lfill = (str: string, width: int, value: char): string => {
  let strlen = String.length(str);
  if (strlen < width) {
    let offset = width - strlen;
    String.init(width, i =>
      switch (i) {
      | i when i < offset => value
      | _ => str.[i - offset]
      }
    );
  } else {
    str;
  };
};

let int_from_string = (str: string): int =>
  if (String.length(str) == 0) {
    0;
  } else {
    int_of_string(str);
  };

let exactMatch = (pattern: string, str: string): bool => {
  let match = Js.String.match(Js.Re.fromString(pattern), str);
  switch (match) {
  | Some(arr) => arr[0] == str
  | None => false
  };
};

let positiveFormat = (comment: string): string => {
  "<span style='background: lightgreen'>" ++ comment ++ "</span>";
};

let negativeFormat = (comment: string): string => {
  "<span style='background: red; color: white;'>" ++ comment ++ "</span>";
};

let matchRegex = (pattern: string, str: string): bool => {
  let match = Js.String.match(Js.Re.fromString(pattern), str);
  switch (match) {
  | Some(_) => true
  | None => false
  };
};

let prettifyText = (text: string): string => {
  let lines = Js.String.split("\n", text);
  let ans = ref("");
  for (i in 0 to Array.length(lines) - 1) {
    if (matchRegex("\\s*\\[\\d+:\\d+\\]\\s*\\+\\.*", lines[i])) {
      ans := ans^ ++ positiveFormat(lines[i]) ++ "<br/>";
    } else if (matchRegex("\\s*\\[\\d+:\\d+\\]\\s*\\-\\.*", lines[i])) {
      ans := ans^ ++ negativeFormat(lines[i]) ++ "<br/>";
    } else {
      ans := ans^ ++ lines[i] ++ "<br/>";
    };
  };
  ans^;
};

let stringFromOption = (str: option(string)): string => {
  switch (str) {
  | Some(x) => x
  | None => ""
  };
};
