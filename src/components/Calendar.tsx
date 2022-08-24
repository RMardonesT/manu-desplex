 import React, { useRef } from 'react';
import { IonButton, IonButtons, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
function Example() {

    const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const reset = () => {
    datetime.current?.reset();
  }
  const cancel = () => {
    datetime.current?.cancel();
  }
  const confirm = () => {
    datetime.current?.confirm();
    console.log(datetime.current?.ATTRIBUTE_NODE)
  }
    return (
        <>
            <IonDatetimeButton datetime="datetime" color= "#ff4d4c">
            </IonDatetimeButton>
            <IonModal keepContentsMounted={true}>
                <IonDatetime 
                    ref={datetime}
                    id="datetime"
                   
                    
                >

<IonButtons slot="buttons">
        <IonButton color="danger" onClick={reset}>Limpiar</IonButton>
        
        <IonButton color="primary" onClick={confirm}>Listo</IonButton>
      </IonButtons>
                </IonDatetime>
            </IonModal>
        </>
    );
}
export default Example;


