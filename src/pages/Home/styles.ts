import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.div`

    width: 100%;
    height: 90px;
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
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0 0 4rem;

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
        vertical-align: middle;
        display: table-cell;
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

    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: 6rem;
    margin-right: 10rem;

    #cards{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;

    #card {
    background-color: #FFFFFF;
    box-shadow: 5px 5px 5px rgb(0 0 0 / 0.2);
    height: 150px;
    margin: 1rem;
    
        #barStatus{
        background-color: #EBB93A;
        height: 150px;
        width: 13px;
        box-shadow: 0 5px 5px rgb(0 0 0 / 0.2);
        position: absolute;
        }

        #secao{
        width: 200px;
        font-size: 12px;
        color: #0075B1;
        margin-top: 1rem;
        margin-left: 2rem;
        }

        #title {
        width: 400px;
        color: #000000;
        font-size: 18px;
        margin-top: 1rem;
        margin-left: 2rem;
        }

        #hold_hours {
        width:200px;
        height:40px;
        float: left;
        margin-top: 7px;
        margin-left: 2rem;
      
            #hours {
            width:200px;
            height:20px;
            margin-left: 15%;
            display: flex;
            justify-content: space-between;
            font-size:11px;
            
                info {
                margin-top: 2px; /* ------------------ */
                font-size: 10px;
                }
            } 
        }
        

        #dates {
        width:300px;
        height:15px;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        margin-left: 2rem;

            p {
            color: #7E7E7E;
            float: left;
            font-size: 12px;
            }
        }

        #situation {
        width:120px;
        height:80px;
        float:right;
        margin-right: 1rem;
        margin-top: -20px
        ;


            #status {
            height: 60px;
            width:110px;
            text-align: center;
            }

            div p:nth-child(1){
            font-weight: regular;
            font-size: 16px;
            cursor: pointer;
            }

            div p:nth-child(2){
            font-weight: bold;
            font-size: 18px;
            cursor: pointer;
            }

        }
    }
}


    

`;


export const Notfications = styled.div`
    margin-top: 80px;
    width: 70px;
    height: 500px;
    border: 2px solid #00579D;
    position: fixed;
    border-radius: 0 15px 15px 0;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;


    img{
        height: 35px;
        width: 35px;
        cursor: pointer;
        margin: 15px;
        }

`;
