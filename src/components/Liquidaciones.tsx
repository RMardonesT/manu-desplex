
import { renderHiddenInput } from '@ionic/core/dist/types/utils/helpers';
import { IonRow, IonCol, IonItem, IonHeader, IonTitle, IonSelect, IonSelectOption, IonIcon, IonLabel, IonList, IonListHeader, IonContent, IonGrid, IonText, IonSearchbar, IonButton, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import React, { Component, useEffect, useState } from 'react';




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


    const options = [
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const [data, setData] = useState(data3);
    const [filteredData, setFilteredData] = useState(data);

    //TOKEN
    const TOKEN = "SA29ASJAPhs5Yol3ew2esBqjZclgNZcZdiHQIVjZ2wSH9E2ci2OtF0X/I0P8pJ/OITP58EegTtsYevHNUOAy83og84RYGzmoD358Aq/Gnk//sxsAVt4wGKgANvkqgGN8";


  
   /*  useEffect(() => {
      
        //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
        getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
            setData(responseData.data);
            console.log(data);
    
            //console.log(responseData.data[0].CODIGO_FICHA);  
    
        });
    
          });
         */
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


/*     //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
    getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
        setData(responseData.data);
        console.log(data);

        //console.log(responseData.data[0].CODIGO_FICHA);  

    }); */


  

    //FILTRAR POR AÑO
    const filterData = (anno:string) => {


        const filtData = data.filter(function (fecha) {
            return fecha.PERIODO_FORMAT.split("-")[1] == anno;
        });
        
        setFilteredData(filtData)
    
    }

      //SELECCIONAR AÑO PARA FILTRADO
      const handleChangeSelect = (value:string) => {

            
    //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
    getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
        setData(responseData.data);
        console.log(data);

        //console.log(responseData.data[0].CODIGO_FICHA);  

    });

        setSelectedOption(value)   
        filterData(value)
    }




    return (


  <Container>
                <IonItem>
                

                    <IonRow>
                        <IonCol>

                        <h3> Liquidaciones de Sueldo </h3>
                        </IonCol>


                        <IonCol>

                        {/*     <IonSelect interface="popover" placeholder="Buscar por año" onChange={e => { handleChangeSelect(e) }}>
                                <IonSelectOption value="apples">2022</IonSelectOption>
                                <IonSelectOption value="oranges">2021</IonSelectOption>
                                <IonSelectOption value="bananas">2020</IonSelectOption>
                            </IonSelect> */}
                            
                            <select 
                                className = "select"
                                value={selectedOption}
                                onChange={e => handleChangeSelect(e.target.value)}>
                                {options.map(o => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}

                                
                            </select>


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


                        {filteredData.map((value, index) => {

                            return (

                                <tr key={index}>

                                    <td> {value.PERIODO_FORMAT}</td>
                                    <td>{value._ESTADO_FIRMA}</td>
                                    <td> <IoDocumentTextOutline size="30" />  <IoEyeOutline size="30" /> </td>
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
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    .select{
        margin-right: 10%
    }
`
