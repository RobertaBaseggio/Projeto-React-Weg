import React, { useState, FormEvent } from 'react';

import { Filters, Title, Form, Header, Cards, Notfications,Menu } from './styles';
import logo from '../../Imagens/logo-weg.svg';
import bandeiraBrasil from '../../Imagens/brasil 2.svg';
import display1 from '../../Imagens/display1.svg';
import display2 from '../../Imagens/display2.svg';
import notification from '../../Imagens/notification.svg';
import avatar from '../../Imagens/Avatar.svg';
import folder from '../../Imagens/folder.svg';
import clock from '../../Imagens/clock.svg';
import group from '../../Imagens/group.svg';

const Home: React.FC = () => {

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

  }
  return (
    <>
      <Header>
        <div id="projetos">
          <img src={logo} />
          <p>PROJETOS</p>
        </div>   
        <div id="flagExit">
          <img src={bandeiraBrasil} /> 
          <p>Sair</p>
        </div>
      </Header>
      <Notfications>
        <div>
          <img src={avatar} />
          <img src={notification} />
          <div id="triangulo"></div>
        </div>
      </Notfications>
      <Filters>
        <div>
          <Title>PROJETOS ALOCADOS</Title>
          <div>
            <div id="filter">
              <Form >
                <label>Projeto:</label>
                <input type="text" placeholder="Digite aqui... "/>
              </Form>
              <p>Seção:</p>
              <div>Todos</div>
              <p>Status:</p>
              <div>Todos</div>
            </div>
            <img src={display1} />
            <img src={display2} />
          </div> 
        </div>
      </Filters>
      <Cards> 
        <div id="cards">
          <div id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000 - PROJETO AAAAAAAA</p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </div>   
          <div id="card">
            <div id="barStatus"> 
            </div>
              <p id="secao"> 0000 - SEÇÃO XYZ</p>
              <p id="title">0000 - PROJETO AAAAAAAA</p>
              <div id="hold_hours">
                <div id="hours">
                  <p id="info">TOTAL:</p>
                  <p id="info">1600h</p>
                </div>
                <div id="hours">
                  <p id="info">APONTADAS:</p>
                  <p id="info">800h</p>
                </div>
              </div>
              <div id="situation">
                <div id="status">
                  <p>Situação: </p>
                  <p>Em Andamento</p>
                </div>
              </div>
              <div id="dates">
                <p>De:20/20/2020</p>
                <p>Até:20/20/2020</p>
              </div>
          </div>  
        </div>
      </Cards>
      <Menu>
        <a href="">
          <div>
            <img src={ clock }/>
            <h1>Aprovação</h1>
          </div>
        </a>
        <a href="">
          <div>
            <img src={ folder }/>
            <h1>Projetos</h1>
          </div>
        </a>
        <a href="">
          <div>
            <img src={ group }/>
            <h1>Consultores</h1>
          </div>
        </a>
      </Menu>
    </>
  )
};

export default Home;
