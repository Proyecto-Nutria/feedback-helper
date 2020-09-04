[@bs.module "./serviceWorker.js"]
external register: unit => unit = "register";
ReactDOMRe.renderToElementWithId(<FeedbackHelper />, "root");
register();