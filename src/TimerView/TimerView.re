[@react.component]
let make = (~time: Time.duration, ~limit: Time.duration) => {
  MaterialUi.(
    <div style={ReactDOM.Style.make(~padding="10px",())}>
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
            {"Start Reset Pause" |> React.string}
          </div>
          <CircularProgressWithLabel
            progress=min(100, Time.percentage(~current=time, ~total=limit))
          />
        </CardContent>
      </Card>
    </div>
  );
};
