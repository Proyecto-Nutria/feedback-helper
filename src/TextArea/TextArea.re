[@react.component]
let make = (~time: Time.t) => {
  open MaterialUi;

  let (text, setText) = React.useState(() => "");

  let handleChange = (e: ReactEvent.Form.t) => {
    ReactEvent.Form.persist(e);
    let timeFormat = (time: Time.t) =>
      "[" ++ Time.format(time) ++ "] ";
    let currText: string = ReactEvent.Form.target(e)##value;
    let length = String.length(currText);
    if (length == 1) {
      Js.log("HOla");
      let ans = String.concat("", [timeFormat(time), currText]);
      setText(_ => ans);
    } else if (currText.[length - 1] == '\n') {
      let ans = String.concat("", [currText, timeFormat(time)]);
      setText(_ => ans);
    } else {
      setText(_ => currText);
    };
  };

  <Card
    style={ReactDOM.Style.make(
      ~display="flex",
      ~width="95%",
      ~justifyContent="center",
      (),
    )}>
    <CardContent style={ReactDOM.Style.make(~width="100%", ())}>
      <TextField
        style={ReactDOM.Style.make(~width="100%", ())}
        label={"Feedback"->React.string}
        variant=`Outlined
        multiline=true
        onChange=handleChange
        value={TextField.Value.string(text)}
        rows={MaterialUi.TextField.Rows.int(16)}
      />
    </CardContent>
  </Card>;
};
