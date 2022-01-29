import GlobalStyle from "./styles/globals";
import "tailwindcss/tailwind.css";
import NavProvider from "./contexts/NavContext";
import Layout from "./utils/Layout";

function App() {
  return (
    <>
      <NavProvider>
        <GlobalStyle />
        <Layout />
      </NavProvider>
    </>
  );
}

export default App;
