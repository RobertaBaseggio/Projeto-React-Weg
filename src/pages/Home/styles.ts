import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`

    width: 100%;
    height: 90px;
    margin: auto;
    border-bottom: 2px solid #90C0E3;  
    display: flex;
    flex-direction: row;
    align-items: center;

    #projetos{
    height: 70px;
    width:240px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
        img{
        height: 90px;
        width: 90px;
        cursor: pointer;
        background-size: 100% 100%;
        margin-left: 20px;
        }

        p{
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        color: #00579D;
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }

    #flagExit{
    width: 115px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 25px;
    top: 10px;

        img{
        height: 40px;
        width: 40px;
        background-image: url('./Imagens/brasil/ 2.svg');
        background-size: 100% 100%;
        cursor: pointer;
        }
        
        p{
        font-weight: normal;
        font-size: 18px;
        height: 30px;
        width: 60px;
        color: #00579D;
        cursor: pointer;
        border-left: 1.5px solid #00579D;
        align-items: center;
        display: flex;
        justify-content: center;
        }
    }

`;

export const Filters = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    margin-bottom: 3rem;

    div{
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    }

    #filter{
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem;

        p{
        color: #7E7E7E;
        font-size: 20px;
        text-align: center;
        }

        div{
        width: 150px;
        height: 20px;
        border: solid 1px  #7E7E7E;
        color:#7E7E7E;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        }

    }

    img{
    cursor: pointer;
    }

`;

export const Title = styled.h1`
    font-weight:normal;
    font-size: 20px;
    text-decoration: underline #0075B1;
    margin-left: 50px;
    width: 300px;
`;

export const Form = styled.form`
    width: 280px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    label {
    color: #7E7E7E;
    font-size: 20px;
    text-align: center;

    }
    
`;

export const Cards = styled.div`
    margin-top: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 80px;
    flex-wrap: wrap;
    

    a {
        background: #fff;
        border-radius: 5px;
        width: 280px;
        padding: 24px;
        text-decoration: none;
        display: flex;
        align-items: center;
        trasition: transform 0.2s;
        margin-right: 30px;
        margin-top: 30px;

        &:hover {
            transform: translate(10px);
        }

        div {
            margin: 0 16px;
            flex: 1;
            strong {
                font-size: 18px;
                color: #3d3d4d;
            }

            p {
                font-size: 16px;
                color: #3d3d4d;
                margin-top: 4px;
                font-weight: 200;
            }
        }
    }

`;
