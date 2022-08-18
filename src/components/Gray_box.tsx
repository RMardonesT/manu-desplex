
import { renderHiddenInput } from '@ionic/core/dist/types/utils/helpers';
import { IonRow, IonCol, IonItem, IonHeader, IonTitle, IonIcon } from '@ionic/react';
import React, { Component, useState } from 'react';

import {IoEye, IoPencilSharp} from "react-icons/io5"
import { Divider, Box} from '@material-ui/core';


import styled from 'styled-components';



interface BoxProps {
    data: any;
}


const Gray_box: React.FC<BoxProps> = ({ data }) => {
    const [view, setView] = useState<boolean>(true)
    const [edit, setEdit] = useState<boolean>(true)

    return (

        <>
                
                <IonTitle >
                    Datos Personales
                </IonTitle>
                <Divider></Divider>
                <Box paddingBottom='30px'></Box>
            

            
            <BoxData>

                {data.map((key: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                    <IonRow>
                        <IonCol>
                            <h3 className='title'>{key.title}</h3>
                        </IonCol>

                        <IonCol>
                            <h3 className="content">{key.content}</h3>
                        </IonCol>

                    </IonRow>

                ))}

        {view? <IoEye className = "view" size = "20" />: ""}
       {edit? <IoPencilSharp className = "edit" size = "20" />: ""}
            </BoxData>

        </>
    )
}




export default Gray_box;



const BoxData = styled.div`
width: 90%;
background-color: #D9D9D9;
border-radius: 3% 3% 3% 3%;
margin-top: .1rem;
margin-left: auto;
margin-right: auto;


z-index: -1;
h3.title{
 color: #262E42 ;
 font-weight: bold   
}

h3.content{
 color: #262E42 ;  
 font-style: italic;
 font-weight: 5;  
}
}

.view{
   width: 180%;
   
   
}
.edit{
   width: 180%;
   
}
` 