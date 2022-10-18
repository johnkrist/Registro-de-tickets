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
            <option value="Servidor esqueceu a senha de Usuário.">
              0-Servidor esqueceu a senha de Usuário
            </option>
            <option value="Usuário estava bloqueado.">
              1-Usuário estava bloqueado
            </option>
            <option
              value="Servidor solicitou a instalação de software."
              selected
            >
              2-Servidor solicitou a instalação de Software
            </option>
            <option value="Servidor Solicitou a Configuração de Software.">
              3-Servidor solicitou a configuração de Software
            </option>
            <option value="Servidor Solicitou a Configuração ou Instalação do Token.">
              4-Servidor solicitou a configuração ou Instalação do Token
            </option>
            <option value="Servidor Solicitou a Configuração da Internet.">
              5-Servidor solicitou a configuração da Internet
            </option>
            <option value="Servidor Solicitou a Configuração da Impressora ou Scanner.">
              6-Servidor solicitou a configuração da Impressora/Scanner
            </option>
            <option value="Servidor Solicitou a Conversão de Arquivos.">
              7-Servidor solicitou a Conversão de Arquivos
            </option>
            <option value="Servidor Solicitou a Configuração das Pastas Compartilhadas.">
              8-Servidor solicitou a configuração das Pastas Compartilhadas
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
            <option value="Senha de Usuário foi Alterada.">
              0-Senha de usuário foi alterada
            </option>
            <option value="Usuário foi desbloqueado.">
              1-Usuário foi desbloqueado
            </option>
            <option value="Software foi instalado." selected>
              2-Software foi instalado
            </option>
            <option value="Software foi configurado.">
              3-Software foi configurado
            </option>
            <option value="Token foi configurado.">
              4-Token foi configurado
            </option>
            <option value="Internet foi configurada.">
              5-Internet foi configurada
            </option>
            <option value="Impressora/Scanner foi configurada.">
              6-Impressora/Scanner foi configurada
            </option>
            <option value="Arquivos foram convertidos.">
              7-Arquivos foram convertidos
            </option>
            <option value="Pastas compartilhadas foram configuradas.">
              8-Pastas compartilhadas foram configuradas
            </option>
          </select>
          <button onClick={copyToClipboard}>
            <FiCopy size={25} color="gray" />
          </button>
        </div>
      </label>
    </FormStyle>
  );
};
