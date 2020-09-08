[@bs.module "./serviceWorker.js"] external register: unit => unit = "default";
ReactDOMRe.renderToElementWithId(<FeedbackHelper />, "root");
register();
