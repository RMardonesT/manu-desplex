
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
        "CODIGO_FICHA": "13474990",
        "CODIGO_CONTRATO": 1,
        "NOMBRE": "LUIS ALEJANDRO GONZALEZ ALVAREZ",
        "PERIODO": "01-07-2022",
        "PERIODO_FORMAT": "07-2022",
        "FLAG_11_YEARS": false,
        "FIRMADO": true,
        "CODIGO_CC": "1-01-000",
        "LABEL_CC": "1-01-000 - ADMINISTRACION Y VENTAS",
        "_ESTADO_FIRMA": "Enviada a Firmar ",
        "FLAG_PORTAL_EMPLEADO": true,
        "_FLAG_PORTAL_EMPLEADO": "Publicada Portal Empleado"
    },
    {
        "CODIGO_FICHA": "13474990",
        "CODIGO_CONTRATO": 1,
        "NOMBRE": "LUIS ALEJANDRO GONZALEZ ALVAREZ",
        "PERIODO": "01-06-2022",
        "PERIODO_FORMAT": "06-2022",
        "FLAG_11_YEARS": false,
        "FIRMADO": true,
        "CODIGO_CC": "1-01-000",
        "LABEL_CC": "1-01-000 - ADMINISTRACION Y VENTAS",
        "_ESTADO_FIRMA": "Firmada",
        "FLAG_PORTAL_EMPLEADO": true,
        "_FLAG_PORTAL_EMPLEADO": "Publicada Portal Empleado"
    }
]


interface Props {

}


const Liquidaciones: React.FC<Props> = ({ }) => {
    const [searchText, setSearchText] = useState("");

    const [data, setData] = useState(data3);
    const [filteredData, setFilteredData] = useState(data);

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
        return axios.post("https://www.plus-rrhh.cl/plus-rrhh/API_REST_DEMO/api/portal_empleado/GetLiquidaciones", dataIn, axiosConfig)
            .then((response: AxiosResponse) => {
                return { data: response.data.data }
            }).catch((error: any) => {
                console.log(error);
            });
    }


    //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
    getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
        setData(responseData.data);
        // console.log(data);       

        //console.log(responseData.data[0].CODIGO_FICHA);  

    });


    //SELECCIONAR AÑO PARA FILTRADO
    const handleChangeSelect = (e: React.FormEvent<HTMLIonSelectElement>) => {
        console.log("CHANGED")
    }

    //FILTRAR POR AÑO
    const filterData = () => {
        

        const filtData =     data.filter(function (fecha) {
            return fecha.PERIODO_FORMAT.split("-")[1] == "2021";
        });

        setFilteredData(filtData)
        
    

    }

    return (

        
        <IonInfiniteScroll>
            <IonInfiniteScrollContent>
            <IonItem>

                <IonRow>
                    <IonCol>
                        <IonButton onClick={filterData}> </IonButton>
                        <IonTitle> Liquidaciones de Sueldo </IonTitle>                        
                    </IonCol>

                    <IonCol>
                        
                        <IonSelect interface="popover" placeholder="Buscar por año" onChange = {e=> {handleChangeSelect(e)}}>
                            <IonSelectOption value="apples">2022</IonSelectOption>
                            <IonSelectOption value="oranges">2021</IonSelectOption>
                            <IonSelectOption value="bananas">2020</IonSelectOption>
                            </IonSelect>
                            
                            
                    </IonCol>
                </IonRow>



            </IonItem>
            <table className="table table-striped">
                <thead>
                    <tr>

                        <th scope="col">Periodo</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Procesos</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data2.map((value, index) => {
                        return (
                            <tr key={index}>

                                <td> {value.fecha}</td>
                                <td>{value.estado}</td>
                                <td> <IoDocumentTextOutline />  <IoEyeOutline /> </td>
                            </tr>
                        );
                    })}  */}


                    {filteredData.map((value, index) => {

                        return (

                            <tr key={index}>

                                <td> {value.PERIODO_FORMAT}</td>
                                <td>{value._ESTADO_FIRMA}</td>
                                <td> <IoDocumentTextOutline size = "30"/>  <IoEyeOutline size = "30" /> </td>
                            </tr>
                        );
                    })}


                </tbody>
            </table>
            </IonInfiniteScrollContent>
            </IonInfiniteScroll>
            
    )


}




export default Liquidaciones;

const Container = styled.div`
    background-color: #D9D9D9;
`

