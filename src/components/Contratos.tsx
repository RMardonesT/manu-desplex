import { IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import axios, { AxiosResponse } from 'axios';
import React from "react";
import Gray_box from './Gray_box';



const JEISON = {data : [
    { title: "Nombre", content: "Juan Aguilera" },
    { title: "Tipo", content: "Simple" },
    { title: "Vinculo", content: "Hermano(a)" },
    { title: "Monto", content: "200.000" }
  ]}



const Contratos: React.FC = () => {


    const TOKEN =  "SA29ASJAPhs5Yol3ew2esBqjZclgNZcZdiHQIVjZ2wSH9E2ci2OtF0X/I0P8pJ/OITP58EegTtsYevHNUOAy84jp0AdS71yK3GiG6hzlSMkNWBwA9wFKyII8y/m1HQp6";


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



  return (


    

        <>
        
         <Gray_box data = {JEISON.data}/>
         <IonButton onClick={e => getContratos({ TOKEN: TOKEN })}>Get Contratos</IonButton>
        </>

  );
};

export default Contratos;