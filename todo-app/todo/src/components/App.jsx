import { BrowserRouter } from "react-router-dom";
import { Menu } from "./template/Menu";
import { RouterOutlet } from "./RouterOutlet";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <RouterOutlet />
      </div>
    </BrowserRouter>
  );
}

export default App;
