[@react.component]
let make = (~limit: Time.duration) => {
  let (time, setTime) = React.useState(() => Time.newDuration());
  React.useEffect0(() => {
    let id =
      Js.Global.setInterval(
        () => setTime(t => Time.add(t, {minutes: 0, seconds: 1})),
        1000,
      );
    Some(() => Js.Global.clearInterval(id));
  });

  MaterialUi.(
    <div style={ReactDOM.Style.make(~padding="10px", ())}>
      <Card>
        <CardContent
          style={ReactDOM.Style.make(
            ~display="flex",
            ~alignItems="center",
            ~flexDirection="row",
            ~justifyContent="space-between",
            (),
          )}>
          <div
            style={ReactDOM.Style.make(
              ~display="flex",
              ~borderRadius="5px",
              ~background="lightgray",
              ~padding="5px",
              ~alignItems="center",
              ~justifyContent="center",
              ~flexDirection="column",
              (),
            )}>
            {React.string(Time.format(time))}
          </div>
          <div style={ReactDOM.Style.make(~display="flex", ())}>
            {"Feedback Helper" |> React.string}
          </div>
          <CircularProgress variant=`Static value={Number.int(min(100 , Time.percentage(~current = time, ~total = limit)))} />
        </CardContent>
      </Card>
    </div>
  );
};
