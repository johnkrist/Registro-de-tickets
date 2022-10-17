import React from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { useState } from "react";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./style";

function App() {
  const [city, setCity] = useState("");

  return (
    <div>
      <Header />
      <Modal city={city} />
      <GlobalStyle>
        <Form city={city} setCity={setCity} />
        <textarea></textarea>
      </GlobalStyle>
    </div>
  );
}

export default App;
