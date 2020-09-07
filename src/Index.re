[@bs.module "./serviceWorker.js"] external register: unit => unit = "default";
ReactDOMRe.renderToElementWithId(
  <React.StrictMode> <FeedbackHelper /> </React.StrictMode>,
  "root",
);
register();
