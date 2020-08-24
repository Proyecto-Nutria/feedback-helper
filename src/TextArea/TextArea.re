[@react.component]
let make = (~time: Time.t) => {
  open MaterialUi;

  let (text, setText) = React.useState(() => "");

  let handleChange = (e: ReactEvent.Form.t) => {
    ReactEvent.Form.persist(e);

    let timeFormat = (time: Time.t) => "[" ++ Time.format(time) ++ "] ";
    let currText: string = ReactEvent.Form.target(e)##value;
    let length = String.length(currText);
    let lastLine = ref("");
    let lastEnterPos = ref(-1);
    if (String.contains(currText, '\n')) {
      lastEnterPos := String.rindex(currText, '\n');
      if (lastEnterPos^ == length - 1) {
        lastLine := "";
      } else {
        lastLine :=
          String.sub(currText, lastEnterPos^ + 1, length - 1 - lastEnterPos^); // includes enter
      };
    } else {
      lastLine := currText;
    };

    if (Util.exactMatch("\\[\\d+:\\d+\\]", lastLine^)) {
      if (lastEnterPos^ == (-1)) {
        setText(_ => "");
      } else {
        setText(_ => String.sub(currText, 0, lastEnterPos^));
      };
    } else if (length == 1) {
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
