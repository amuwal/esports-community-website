import { RouterProvider } from "react-router-dom";

import router from "./router.js";

function App() {
  return (
    <div className="bg-[#05152f] min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
