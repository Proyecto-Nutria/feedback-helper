type duration = {
  minutes: int,
  seconds: int,
};

let newDuration = (): duration => {minutes: 0, seconds: 0};

let normalize = (d: duration): duration => {
  let minutes = d.minutes + d.seconds / 60;
  let seconds = d.seconds mod 60;
  {minutes, seconds};
};

let add = (a: duration, b: duration): duration => {
  normalize({minutes: a.minutes + b.minutes, seconds: a.seconds + b.seconds});
};

let percentage = (~current: duration, ~total: duration): int => {
  let totalSeconds = total.seconds + total.minutes * 60;
  let currentSeconds = current.seconds + current.minutes * 60;
  int_of_float(
    float_of_int(currentSeconds) /. float_of_int(totalSeconds) *. 100.,
  );
};

let format = (d: duration): string => {
  Util.lfill(string_of_int(d.minutes), 2, '0')
  ++ ":"
  ++ Util.lfill(string_of_int(d.seconds), 2, '0');
};

let toSeconds = (d: duration): int => {
  d.seconds + d.minutes * 60;
};
