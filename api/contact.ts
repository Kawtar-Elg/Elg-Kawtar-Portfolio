import { handleContactRequest, type ContactRequestLike, type ContactResponseLike } from "../server/contact.ts";

export default function handler(request: ContactRequestLike, response: ContactResponseLike) {
  return handleContactRequest(request, response);
}
