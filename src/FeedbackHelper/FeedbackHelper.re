[@react.component]
let make = () => {
  let (gTime, setGTime) = React.useState(() => Time.newDuration());
  let (isTimerActive, setIsTimerActive) = React.useState(() => false);

  React.useEffect1(
    () => {
      let intervalId: Pervasives.ref(option(Js.Global.intervalId)) =
        ref(None);
      if (isTimerActive) {
        intervalId :=
          Some(
            Js.Global.setInterval(
              () =>
                setGTime(oldTime =>
                  Time.add(oldTime, {minutes: 0, seconds: 1})
                ),
              1000,
            ),
          );
      } else if (!isTimerActive) {
        let _ =
          switch (intervalId^) {
          | Some(a) => Some(() => Js.Global.clearInterval(a))
          | None => None
          };
        ();
      };

      switch (intervalId^) {
      | Some(a) => Some(() => Js.Global.clearInterval(a))
      | None => None
      };
    },
    [|isTimerActive|],
  );

  let onPlay = (): unit => setIsTimerActive(_ => true);
  let onPause = (): unit => setIsTimerActive(_ => false);
  let onReset = (): unit => {
    setGTime(_ => Time.newDuration());
    setIsTimerActive(_ => false);
  };

  <div>
    <TimerView
      limit={minutes: 45, seconds: 0}
      time=gTime
      onPlay
      onPause
      onReset
    />
    <TextArea time=gTime />
  </div>;
};
