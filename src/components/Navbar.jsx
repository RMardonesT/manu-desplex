import React, { useState } from 'react'
import styled from 'styled-components'
import { IonButton } from '@ionic/react';
import BurgerButton from './BurgerButton';

import {AiOutlineMedicineBox} from "react-icons/ai";
import { FaPenNib, FaUmbrellaBeach } from 'react-icons/fa';


function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
        console.log(clicked)
    }
    return (
        <>
            <NavContainer>
                <h2> Navbar  <span>Responsive</span></h2>

                <div className={`links ${clicked ? 'active' : ""}`}>
                    <a href="/">  Anticipos</a>
                    <a href="/"> <AiOutlineMedicineBox/> Licencias</a>
                    <a href="/"> <FaUmbrellaBeach/> Vacaciones</a>
                    <a href="/"> <FaPenNib/>Firmas</a>                
                </div>

                <div className="burguer">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <div className="burguer2">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <div className="burguer3">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? 'active' : ''}`}> </BgDiv>
            </NavContainer>




        </>
    )
}

export default Navbar


const NavContainer = styled.nav`
    
    
    h2{
        color: white ;
        font-weigth: 400;
        span{
            font-weight: bold
        }
    }

    

    padding: .4rem;
    background-color: #ff4d4c;;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;

    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        
        a{
          color: white;
          font-size: 2rem;
          display: block;
        }
        
      }

    .links.active{
        position: absolute;
        width: 100%;
        display: block;
        position: absolute;
        margin-left:auto;
        margin-right:auto;
        top: 100px;
        left: 0;
        right: 0;
        text-align:center;

        a{
            color: white;
            font-size: 2rem;
            margin-top: 1rem;
            
        }

    }

`


 const Menu= styled.div`

 
 `
const BgDiv = styled.div`
    position: absolute;
    background-color: #262E42;
    
    top: -700px;
    left: -1000px;

    width: 100%;
    height: 100%;
    z-index: -1;

    transition: all .6s ease;
    &.active{
        border-radius: 0 0 50% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
    }

`