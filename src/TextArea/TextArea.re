[@react.component]
let make = (~time: Time.duration) => { 
  open MaterialUi;

  let (text, setText) = React.useState(() => "");

  let handleChange = (e: ReactEvent.Form.t) => {
    ReactEvent.Form.persist(e);
    let timeFormat = (time: Time.duration) => "[" ++ Time.format(time) ++ "] ";
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

  <div style={ReactDOM.Style.make(~padding="10px", ())}>
    <Card>
      <CardContent style={ReactDOM.Style.make(~display="flex", ())}>
        <TextField
          label="Feedback"->React.string
          variant=`Outlined
          multiline=true
          style=ReactDOM.Style.make(~flexGrow="1", ())
          onChange=handleChange
          value={TextField.Value.string(text)}
        />
      </CardContent>
    </Card>
  </div>;
};
