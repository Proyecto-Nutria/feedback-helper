[@bs.module "./Clipboard.js"]
external copyToClipboard: (~formattedText: string, ~plainText: string) => unit =
  "default";

[@react.component]
let make = (~time: Time.t) => {
  let (text, setText) = React.useState(() => "");
  open Webapi;

  let scrollableDiv = React.createRef();

  let fullScrollBottom = (): unit => {
    let nullableCurrElem = Js.Nullable.toOption(scrollableDiv.current);
    switch (nullableCurrElem) {
    | Some(currElem) =>
      Dom.Element.setScrollTop(
        currElem,
        float_of_int(Dom.Element.scrollHeight(currElem)),
      )
    | None => ()
    };
  };

  let handleChange = (e: ReactEvent.Form.t) => {
    ReactEvent.Form.persist(e);
    fullScrollBottom();
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

  let instructions = {|
  Prepend your comment with "+" if it is a positive comment or with "-" if it is a negative comment

  Example:
  
  [02:00] + Interesting introduction of herself
  [05:00] / At this point I finished explaining the problem to the interviewee
  [06:20] - Gave an idea before asking fundamental questions
  |};
  MaterialUi.(
    <div
      style={ReactDOM.Style.make(
        ~display="flex",
        ~flex="1",
        ~width="98%",
        ~overflowY="auto",
        ~alignItems="center",
        ~flexDirection="column",
        ~minHeight="0",
        (),
      )}>
      <div
        ref={ReactDOMRe.Ref.domRef(scrollableDiv)}
        style={ReactDOM.Style.make(
          ~display="flex",
          ~flex="1",
          ~overflowY="auto",
          ~minHeight="0",
          ~width="100%",
          ~justifyContent="center",
          (),
        )}>
        <div style={ReactDOM.Style.make(~width="100%", ())}>
          <Card>
            <CardContent>
              <TextField
                style={ReactDOM.Style.make(~width="100%", ())}
                label={"Feedback"->React.string}
                variant=`Outlined
                multiline=true
                onChange=handleChange
                value={TextField.Value.string(text)}
                placeholder=instructions
              />
              <div style={ReactDOM.Style.make(~height="20px", ())} />
              <Button
                onClick={_ =>
                  copyToClipboard(
                    ~formattedText=Util.prettifyText(text),
                    ~plainText=text,
                  )
                }
                variant=`Contained
                color=`Primary
                style={ReactDOM.Style.make(~width="100%", ())}>
                "Copy to clipboard"
              </Button>
              <div style={ReactDOM.Style.make(~height="10px", ())} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
