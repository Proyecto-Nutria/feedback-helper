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