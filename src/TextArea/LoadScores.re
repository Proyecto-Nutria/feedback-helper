module Query = [%relay.query
  {|
    query LoadScores_Query {
      interviewScores {
        id,
        value,
        description
      }
    }
  |}
];

[@react.component]
let make =
  Util.forceMemo(
    (
      ~onFetch: (~scores: array(Query.Types.response_interviewScores)) => unit,
    ) => {
    let queryData = Query.use(~variables=(), ());
    React.useEffect1(
      _ => {
        onFetch(~scores=queryData.interviewScores);
        None;
      },
      [|queryData|],
    );
    React.null;
  });
