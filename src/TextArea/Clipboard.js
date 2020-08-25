import * as clipboard from "clipboard-polyfill";

export default function copyToClipboard(formattedText, plainText) {
  const item = new clipboard.ClipboardItem({
    "text/html": new Blob(
      [formattedText],
      { type: "text/html" }
    ),
    "text/plain": new Blob(
      [plainText],
      { type: "text/plain" }
    ),
  });
  clipboard.write([item]);
}