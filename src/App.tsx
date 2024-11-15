import type { AppProps } from "next/app";
// import PageTransition from "./components/PageTransition";
import "./styles/globals.css"; // Include your global styles
import Register from "./pages/Register";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <PageTransition>
    //   <Component {...pageProps} />
    // </PageTransition>
    <div className="app-div">
      {" "}
      in app
      <Register />
    </div>
  );
};

export default App;
