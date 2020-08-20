[@react.component]
let make = (~progress: int) => {
  MaterialUi.(
    <Box
      style={ReactDOM.Style.make(
        ~position="relative",
        ~display="inline-flex",
        (),
      )}>
      <CircularProgress variant=`Static value={Number.int(progress)} />
      <Box
        style={ReactDOM.Style.make(
          ~top="0",
          ~left="0",
          ~bottom="0",
          ~right="0",
          ~position="absolute",
          ~display="flex",
          ~alignItems="center",
          ~justifyContent="center",
          (),
        )}>
        <Typography variant=`Caption color=`TextSecondary component={Typography.Component.string("div")}>
          {string_of_int(progress) ++ "%"}
        </Typography>
      </Box>
    </Box>
  );
};
