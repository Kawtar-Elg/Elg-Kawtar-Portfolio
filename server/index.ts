import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleContactRequest } from "./contact.ts";

dotenv.config({ path: ".env.local" });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "32kb" }));

app.post("/api/contact", (request, response) => {
  void handleContactRequest(request, response);
});

app.use((error: unknown, _request: express.Request, response: express.Response, next: express.NextFunction) => {
  if (error instanceof SyntaxError) {
    response.status(400).json({ success: false, error: "Invalid request body." });
    return;
  }
  next(error);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
