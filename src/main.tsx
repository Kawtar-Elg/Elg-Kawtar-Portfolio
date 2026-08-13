import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/workspace.scss";
import "./styles/designer.scss";

createRoot(document.getElementById("root")!).render(<App />);
