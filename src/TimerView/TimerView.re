[@react.component]
let make =
    (
      ~time: Time.duration,
      ~limit: Time.duration,
      ~onPlay: unit => unit,
      ~onPause: unit => unit,
      ~onReset: unit => unit,
    ) => {
  open MaterialUi;

  let (isOnPause, setIsOnPause) = React.useState(() => true);

  let togglePlayPause = () =>
    if (isOnPause) {
      onPlay();
      setIsOnPause(_ => false);
    } else {
      onPause();
      setIsOnPause(_ => true);
    };

  let reset = () => {
    onReset();
    setIsOnPause(_ => true);
  };

  <Card
    style={ReactDOM.Style.make(
      ~display="flex",
      ~flexDirection="row",
      ~justifyContent="center",
      ~width="95%",
      (),
    )}>
    <CardContent
      style={ReactDOM.Style.make(
        ~display="flex",
        ~justifyContent="center",
        ~justifyItems="center",
        ~alignItems="center",
        ~alignContent="center",
        (),
      )}>
      <div style={ReactDOM.Style.make(~display="flex", ())}>
        <IconButton color=`Primary onClick={_ => togglePlayPause()}>
          <Icon> {isOnPause ? "play_arrow" : "pause"} </Icon>
        </IconButton>
      </div>
      <div style={ReactDOM.Style.make(~width="10px", ())}></div>
      <div
        style={ReactDOM.Style.make(~display="flex", ())}>
        <CircularProgressWithLabel
          progress={min(100, Time.percentage(~current=time, ~total=limit))}
          label={Time.format(time)}
        />
      </div>
      <div style={ReactDOM.Style.make(~width="10px", ())}></div>
      <div
        style={ReactDOM.Style.make(
          ~height="120%",
          ~display="flex",
          ~flexDirection="column",
          ~justifyContent="space-between",
          (),
        )}>
        <IconButton onClick={_ => ()}> <Icon> "settings" </Icon> </IconButton>
        <IconButton color=`Secondary onClick={_ => reset()}>
          <Icon> "replay" </Icon>
        </IconButton>
      </div>
    </CardContent>
  </Card>;
};
