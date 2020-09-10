[@bs.module "./serviceWorker.js"] external register: unit => unit = "default";
// ReactExperimental.renderConcurrentRootAtElementWithId(
  ReactDOMRe.renderToElementWithId(
  <ReasonRelay.Context.Provider environment=RelayEnv.environment>
    <FeedbackHelper />
  </ReasonRelay.Context.Provider>,
  "root",
);
register();