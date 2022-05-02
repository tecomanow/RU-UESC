import { Sidebar } from "./app/Components/SideBar/sidebar";
import { Home2 } from "./app/Pages/Home2/Home2";
import { LoginPage } from "./app/Pages/Login/Login";
import AllRoutes from "./app/Routes/Routes";
import './index.css'

function App() {
  return (
    //<LoginPage className="App"></LoginPage>
    //<div className="App"><LoginPage></LoginPage></div>
    //<div className="App"><Home2></Home2></div>
    <AllRoutes></AllRoutes>
  );
}

export default App;
