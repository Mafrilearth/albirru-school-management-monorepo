import type messages from "../../messages/id.json";

type Messages = typeof messages;

declare global {
  // Use message keys from id.json for type checking and autocompletion
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
