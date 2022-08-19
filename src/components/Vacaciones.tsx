
import { renderHiddenInput } from '@ionic/core/dist/types/utils/helpers';
import { IonRow, IonCol, IonItem, IonHeader, IonTitle, IonSelect, IonSelectOption, IonIcon, IonLabel, IonList, IonListHeader, IonContent, IonGrid, IonText, IonSearchbar, IonButton, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import React, { Component, useState } from 'react';




import { IoEye, IoEyeOutline, IoPencilSharp, IoDocumentTextOutline } from "react-icons/io5"


/* POST AND GET */
import axios, { AxiosResponse } from 'axios';


import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'



const data2 = [
    { fecha: "07-2022", estado: "Enviada a Firmar", accion: "1" },
    { fecha: "06-2022", estado: "Firmada", accion: "1" },
    { fecha: "05-2022", estado: "Firmada", accion: "1" },
    { fecha: "04-2022", estado: "Enviada a Firmar", accion: "1" },


]

const data3 = [
    {
    "CODIGO_SOLICITUD_VACACION": 13,
    "CODIGO_CONTRATO": 1,
    "CODIGO_FICHA": "13474990",
    "NOMBRE_FICHA": "LUIS ALEJANDRO GONZALEZ ALVAREZ",
    "RUT_USUARIO": "13474990-3",
    "INICIO": "16-12-2021",
    "_INICIO": "2021-12-16T00:00:00",
    "TERMINO": "05-01-2022",
    "_TERMINO": "2022-01-05T00:00:00",
    "OBSERVACION": null,
    "CREACION": "16-12-2021",
    "_CREACION": "2021-12-16T12:12:06.903",
    "RUT_FICHA": "13474990-3",
    "ESTADO": "Aprobado",
    "_ESTADO": "A",
    "USUARIO_APROBADOR": null,
    "FECHA_APROBADOR": null,
    "_FECHA_APROBADOR": "0001-01-01T00:00:00",
    "TOTAL_DIAS": 21,
    "TOTAL_DIAS_HABILES": 15,
    "TOTAL_INHABILES": 6,
    "TOTAL_DIAS_PENDIENTES": 6,
    "TOTAL_DIAS_PROGRESIVOS_PENDIENTES": 0,
    "INICIO_CONTRATO": "01-08-2019",
    "_INICIO_CONTRATO": "2019-08-01T00:00:00",
    "PRINT_LEGALE": false,
    "FIRMADO": true
}
]


interface Props {

}


const Liquidaciones: React.FC<Props> = ({ }) => {
    

    const [data, setData] = useState(data3);
    

    //TOKEN
    const TOKEN = "SA29ASJAPhs5Yol3ew2esBqjZclgNZcZdiHQIVjZ2wSH9E2ci2OtF0X/I0P8pJ/OITP58EegTtsYevHNUOAy83og84RYGzmoD358Aq/Gnk//sxsAVt4wGKgANvkqgGN8";

    function getLiquidaciones(dataIn: any) {

        //indica que se trabaja con JSON
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
            }
        };

        //RESPUESTA DE  LA API
        return axios.post("https://www.plus-rrhh.cl/plus-rrhh/API_REST_DEMO/api/portal_empleado/GetVacaciones", dataIn, axiosConfig)
            .then((response: AxiosResponse) => {
                return { data: response.data.data }
            }).catch((error: any) => {
                console.log(error);
            });
    }


 /*    //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
    getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
        setData(responseData.data);
        console.log(data);       

        //console.log(responseData.data[0].CODIGO_FICHA);  

    }); */

    const runAxios = () => {
           //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
    getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
        setData(responseData.data);
        console.log(data);       

        //console.log(responseData.data[0].CODIGO_FICHA);  

    });
        
    }




    return (

        
      <Container>
            <IonItem>

                <IonRow>
                    
                        
                        <IonTitle> Vacaciones </IonTitle>    
   
                </IonRow>



            </IonItem>
            <table className="table table-striped">
                <thead>
                    <tr>

                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                    </tr>
                </thead>
                <tbody>


                    {data.map((value, index) => {

                        return (

                            <tr key={index}>

                                <td>
                                    <IonRow>
                                        <IonCol className=' col'>
                                        
                                        <strong>Dias Habiles </strong>     <br />
                                
                                        <strong>Desde</strong>     <br />
                                        <strong>Hasta</strong>     <br />
                                        
                                        <strong>Estado</strong><br />
                                        <strong>Accion</strong><br />

                                        </IonCol>

                                        <IonCol>
                                            {value.TOTAL_DIAS_HABILES} <br/>
                                            {value.INICIO} <br />
                                            {value.TERMINO} <br/>
                                            {value.ESTADO}  <br/>
                                            <IoDocumentTextOutline size="25" />  <IoEyeOutline size="25" /> 

                                        </IonCol>
                                        
                                    </IonRow>

                                </td>
                                

                                
                            </tr>
                        );
                    })}


                </tbody>
            </table>
      
            </Container>
    )


}




export default Liquidaciones;

const Container = styled.div`
    width: 99%;
    margin-left: auto;
    margin-right: auto;

    .select{
        margin-right: 10%
    }

    .col{
        display: block;
    }



`
