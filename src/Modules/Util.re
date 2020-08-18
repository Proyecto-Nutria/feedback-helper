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
