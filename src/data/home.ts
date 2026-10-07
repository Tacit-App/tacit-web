import { messages } from "../i18n/messages";

/** English homepage copy (source of truth lives in `src/i18n/messages/en.ts`). */
export const home = {
  title: messages.en.meta.title,
  ...messages.en.home,
};
