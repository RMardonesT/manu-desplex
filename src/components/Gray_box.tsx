import { IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';

import React, { lazy } from "react";

import './Gray_box.css';

interface ModalProps {
  data: any;
}

const GrayBox: React.FC<ModalProps> = ({data}) => {

  return (

    <div className='Box' >
      {data.map((key: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        <IonRow className = "Gray">
          <IonCol>
            <IonItem lines='none' className='title'>{key.title}</IonItem>
          </IonCol>
          <IonCol>
            <IonItem lines='none' className="content">{key.content}</IonItem>
          </IonCol>
        </IonRow>

      ))}
    </div>

  );
};

export default GrayBox;