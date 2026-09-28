import Home from "./pages/Home/Home";
import Treatment from "./pages/Treatment/Treatment";
import About from "./pages/About/About";
import "./index.css";

function App() {
  const pathname =
    window.location.pathname.replace(/\/+$/, "") || "/";

  /* HOME */
  if (pathname === "/") {
    return <Home />;
  }

  /* TREATMENTS */
  if (pathname === "/treatments") {
    return <Treatment />;
  }

  /* ABOUT */
  if (pathname === "/about") {
    return <About />;
  }

  /* FALLBACK */
  return <Home />;
}

export default App;