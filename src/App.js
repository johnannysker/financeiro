import React from "react";
import Resume from "./components/Resume";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <Header />
      <Resume />
      <GlobalStyle />
    </>
  );
}

export default App;
