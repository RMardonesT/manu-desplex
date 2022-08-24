import { IonCheckboxCustomEvent } from '@ionic/core';
import { CheckboxChangeEventDetail, IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import axios, { AxiosResponse } from 'axios';
import React, { useState } from "react";
import { IoListOutline } from 'react-icons/io5';
import styled from 'styled-components';
import Gray_box from './Gray_box';


import './Gray_box.css';






const RESPONSE = {
    "EDITABLE": false,
    "FECHA_CREACION": "",
    "_FECHA_CREACION": null,
    "CODIGO_CONTRATO": 1,
    "LABEL": "1 - ASISTENTE ADMINISTRATIVO",
    "CODIGO_FICHA": "13474990",
    "LABEL_FICHA": "13474990 - LUIS ALEJANDRO GONZALEZ ALVAREZ",
    "CODIGO_CC": "1-01-000",
    "LABEL_CC": "1-01-000 - ADMINISTRACION Y VENTAS",
    "NOMBRE_CC": "ADMINISTRACION Y VENTAS",
    "CODIGO_CARGO": 330,
    "NOMBRE_CARGO": "ASISTENTE ADMINISTRATIVO",
    "FECHA_INICIO": "01-08-2019",
    "_FECHA_INICIO": "2019-08-01T00:00:00",
    "FECHA_EXPIRACION": null,
    "_FECHA_EXPIRACION": null,
    "INDEFINIDO": true,
    "FINIQUITO": false,
    "ESTADO": "A",
    "ESTADO_STR": "Aprobado",
    "USUARIO_APROBADOR": "18520518-5",
    "FECHA_APROBADOR": "16-04-2021",
    "_FECHA_APROBADOR": "2021-04-16T10:52:56.683",
    "CODIGO_FORMATO": null,
    "MOTIVO_RECHAZO": null,
    "FECHA_FINIQUITO": "",
    "_FECHA_FINIQUITO": null,
    "MONTO_FINIQUITO": "",
    "CODIGO_CONCEPTO_FINIQUITO": null,
    "NOMBRE_CONCEPTO_FINIQUITO": null,
    "OBSERVACION_FINIQUITO": null,
    "USUARIO_FINIQUITO": "",
    "ESTADO_FINIQUITO": null,
    "APROBADOR_FINIQUITO": null,
    "FECHA_APROBAR_FINIQUITO": "",
    "_FECHA_APROBAR_FINIQUITO": null,
    "MOTIVO_RECHAZO_FINIQUITO": null,
    "PERIODO_FINIQUITO": "",
    "_PERIODO_FINIQUITO": null,
    "CREACION_FINIQUITO": "",
    "_CREACION_FINIQUITO": null,
}






const Container = styled.div`
margin-right: 50%;
 width: 60%;
heigth: 10%;

`




const Contratos: React.FC = () => {

    

    const DATA_RESPONSE = [
        { title: "Contrato", content: RESPONSE.LABEL, "state" :true },
        { title: "Ficha", content: RESPONSE.LABEL_FICHA, "state" :true },
        { title: "Centro Costos", content: RESPONSE.LABEL_CC, "state" :true },
        { title: "Fecha Inicio", content: RESPONSE.FECHA_INICIO , "state" :true},
        { title: "Fecha Expiración", content: RESPONSE.FECHA_EXPIRACION, "state" :true },
        { title: "Indefinido", content: RESPONSE.INDEFINIDO, "state" :true },

        //{ title: "Contrato Mensual", content: RESPONSE. , "state" :true },
        //{ title: "Obra Faena", content: RESPONSE., "state" :true },

        { title: "Indefinido", content: RESPONSE.INDEFINIDO, "state" :true },

        { title: "Indefinido", content: RESPONSE.INDEFINIDO, "state" :true },

        { title: "Indefinido", content: RESPONSE.INDEFINIDO, "state" :true },

    ]


    const [DATA,setDATA] = useState(DATA_RESPONSE)
    const [dataShow, setdataShow] =  useState(DATA_RESPONSE)


    const TOKEN = "SA29ASJAPhs5Yol3ew2esBqjZclgNZcZdiHQIVjZ2wSH9E2ci2OtF0X/I0P8pJ/OITP58EegTtsYevHNUOAy84jp0AdS71yK3GiG6hzlSMkNWBwA9wFKyII8y/m1HQp6";


    function getContratos(dataIn: any) {

        //indica que se trabaja con JSON
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        //RESPUESTA DE  LA API
        return axios.post("https://www.plus-rrhh.cl/plus-rrhh/API_REST_DEMO/api/portal_empleado/GetContratoDetalle", dataIn, axiosConfig)
            .then((response: AxiosResponse) => {

                console.log(response.data)
                return { data: response.data.data }
            }).catch((error: any) => {
                console.log(error);
            });
    }


    const handleChecked = (e: IonCheckboxCustomEvent<CheckboxChangeEventDetail<any>>, idx: number) => {
        DATA[idx].state = e.detail.checked
                    
        
        
        const filtData = DATA.filter(function (elem) {
            return elem.state == true;
        });
        console.log(filtData)
        setdataShow(filtData)

        

    }



    return (




        <>


            <IonButton onClick={e => getContratos({ TOKEN: TOKEN })}>Get Contratos</IonButton> 

            




            
            

            <div className='Box' >

                {dataShow.map((key, index) => {

                    return (


                            
                        
                            <IonRow className="Gray">
                                <IonCol>
                                    <IonItem lines='none' className='title'>{key.title}</IonItem>
                                </IonCol>
                                <IonCol>
                                    <IonItem lines='none' className="content">{key.content}</IonItem>
                                </IonCol>
                            </IonRow> 
                        


                    );
                })}

            </div>
            <>
            <Container>
                <IonAccordionGroup>
                    <IonAccordion value="colors">
                        <IonItem slot="header">
                            <IoListOutline />
                            <IonLabel className="ion-padding-start"> Informaciones</IonLabel>
                        </IonItem>

                        <IonList slot="content">
                            {DATA.map((value, index) => {

                                return (

                                    <IonItem> {DATA[index].title} <IonCheckbox color="primary" slot="end" onIonChange={e => handleChecked(e, index)} /> </IonItem>
                                );
                            })}
                        </IonList>
                    </IonAccordion>
                </IonAccordionGroup>
            </Container>


        </>

           





        </>

    );
};

export default Contratos;

function pick(RESPONSE: { EDITABLE: boolean; FECHA_CREACION: string; _FECHA_CREACION: null; CODIGO_CONTRATO: number; LABEL: string; CODIGO_FICHA: string; LABEL_FICHA: string; CODIGO_CC: string; LABEL_CC: string; NOMBRE_CC: string; CODIGO_CARGO: number; NOMBRE_CARGO: string; }, arg1: string, arg2: string) {
    throw new Error('Function not implemented.');
}


