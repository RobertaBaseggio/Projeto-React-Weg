import React, { useState, FormEvent } from 'react';

import { Filters, Title, Form, Header, Cards } from './styles';
import logo from '../../Imagens/logo-weg.svg';
import bandeiraBrasil from '../../Imagens/brasil 2.svg';
import display1 from '../../Imagens/display1.svg';
import display2 from '../../Imagens/display2.svg';

const Home: React.FC = () => {

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

  }
  return (
    <>
      <Header>
        <div id="projetos">
          <img src={logo} />
          <p>
            PROJETOS
          </p>
        </div>   
        <div id="flagExit">
          <img src={bandeiraBrasil} /> 
          <p >
            Sair
          </p>
        </div>
      </Header>
      <Filters>
        <div>
          <Title>PROJETOS ALOCADOS</Title>
          <div>
            <div id="filter">
              <Form >
                <label>Projeto:</label>
                <input type="text" placeholder="Digite aqui... "/>
              </Form>
              <p>
                Seção:
              </p>
              <div >
                Todos
              </div>
              <p>
                Status:
              </p>
              <div >
                Todos
              </div>
            </div>
            <img src={display1} />
            <img src={display2} />
          </div> 
        </div>
      </Filters>

    </>
  )
};

export default Home;
