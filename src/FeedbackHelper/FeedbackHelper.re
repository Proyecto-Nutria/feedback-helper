[@react.component]
let make = () => {
  let (gTime, setGTime) = React.useState(() => Time.newDuration());
  React.useEffect0(() => {
    let id =
      Js.Global.setInterval(
        () =>
          setGTime(oldTime => Time.add(oldTime, {minutes: 0, seconds: 1})),
        1000,
      );
    Some(() => Js.Global.clearInterval(id));
  });
  <div>
    <TimerView limit={minutes: 45, seconds: 0} time=gTime />
    <TextArea time=gTime />
  </div>;
};
