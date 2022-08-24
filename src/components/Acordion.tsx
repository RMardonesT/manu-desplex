import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import axios, { AxiosResponse } from 'axios';
import React, { useState } from "react";
import { IoHomeOutline, IoListOutline } from 'react-icons/io5';

import styled from 'styled-components';

import './Gray_box.css';




const Acordion: React.FC = () => {

    const options = ["Contrato", "Ficha", "Centro de Costos", "Estado",
        "Fecha Inicio", "Fecha Expiración", "Indefinido",
        "Contrato Mensual", "Obra Faena", "Motivo Rechazo",
        "Finiquito", "Estado Finiquito", "Motivo Rechazo Finiquito",
        "Monto Finiquito", "Fecha Finiquito", "N° Anexos",
        "Estado Firma", "Procesos"
    ]

    const flag = true;
    
    const [ checked, setChecked ] = useState(false);


    console.log(checked)

    return (


        <>
            <Container>
                <IonAccordionGroup>
                    <IonAccordion value="colors">
                        <IonItem slot="header">
                            <IoListOutline />
                            <IonLabel className="ion-padding-start"> Informaciones</IonLabel>
                        </IonItem>

                        <IonList slot="content">
                            {options.map((value, index) => {

                                return (

                                    <IonItem> {options[index]} <IonCheckbox color="primary" slot="end"   onIonChange={e => setChecked(!e.detail.checked)} /> </IonItem>
                                );
                            })}
                        </IonList>
                    </IonAccordion>
                </IonAccordionGroup>
            </Container>


            <div className='Box' >
                {flag ?
                <IonRow className="Gray">
                    <IonCol> <IonItem lines='none' className='title'> HOLA</IonItem></IonCol>
                    <IonCol> <IonItem lines='none' className="content"> HOL2</IonItem> </IonCol>
                </IonRow>: ""
                }

            </div>
        </>

    );
}

export default Acordion;

const Container = styled.div`
margin-right: 50%;
 width: 60%;
heigth: 10%;

`