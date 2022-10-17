import React from "react";
import { useState } from "react";
import { FormStyle } from "./style";
import { FiCopy } from "react-icons/fi";

import copy from "copy-to-clipboard";

export const Form = ({ city, setCity }) => {
  const [copyText, setCopyText] = useState("");

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.value.toUpperCase());
  };

  return (
    <FormStyle onSubmit={handleSubmit} type="submit">
      <label htmlFor="">
        Pesquisar Sede:
        <input
          placeholder="Digite o Municipio"
          onChange={(e) => handleSubmit(e)}
          type="text"
        />
      </label>

      <label htmlFor="">
        Descrição de Ocorrência
        <div className="container">
          <select onChange={handleCopyText} name="select">
            <option value="Usuário foi bloqueado">
              1-Usuário foi bloqueado
            </option>
            <option
              value="Servidor Solicitou a Instalação de Software"
              selected
            >
              2-Servidor Solicitou a Instalação de Software
            </option>
            <option value="Servidor Solicitou a Configuração de Software">
              3-Servidor Solicitou a Configuração de Software
            </option>
          </select>
          <button onClick={copyToClipboard}>
            <FiCopy size={25} color="gray" />
          </button>
        </div>
      </label>

      <label htmlFor="">
        Descrição de Solucão
        <div className="container">
          <select onChange={handleCopyText} name="select">
            <option value="Usuário foi Desbloqueado">
              {" "}
              1-Usuário foi Desbloqueado
            </option>
            <option value="Software foi Instalado" selected>
              2-Software foi Instalado
            </option>
            <option value="Software foi Configurado">
              3-Software foi Configurado
            </option>
          </select>
          <button onClick={copyToClipboard}>
            <FiCopy size={25} color="gray"/>
          </button>
        </div>
      </label>
    </FormStyle>
  );
};
