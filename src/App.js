// src/App.jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import './Components/SubjectBtn.css'
import './Components/footer.css'
import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
