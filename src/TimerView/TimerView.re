[@react.component]
let make =
    (
      ~time: Time.duration,
      ~limit: Time.duration,
      ~onPlay: unit => unit,
      ~onPause: unit => unit,
      ~onReset: unit => unit,
    ) => {
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
            <ButtonGroup color=`Primary variant=`Contained>
              <Button onClick={_ => onPause()}> <Icon> "pause" </Icon> </Button>
              <Button onClick={_ => onPlay()}> <Icon> "play_arrow" </Icon> </Button>
              <Button onClick={_ => onReset()}> <Icon> "replay" </Icon> </Button>
            </ButtonGroup>
          </div>
          <CircularProgressWithLabel
            progress={min(100, Time.percentage(~current=time, ~total=limit))}
            label={Time.format(time)}
          />
        </CardContent>
      </Card>
    </div>
  );
};
