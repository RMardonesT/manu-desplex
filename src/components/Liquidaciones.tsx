
import { renderHiddenInput } from '@ionic/core/dist/types/utils/helpers';
import { IonRow, IonCol, IonItem, IonHeader, IonTitle, IonSelect, IonSelectOption, IonIcon, IonLabel, IonList, IonListHeader, IonContent, IonGrid, IonText, IonSearchbar, IonButton, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import React, { Component, useEffect, useState } from 'react';
import Select from "react-select";



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



    const opts = ["2022", "2021", "2020"]
    const range = (start: number, end: number) => Array.from(Array(end - start + 1).keys()).map(x => x + start);
    //console.log(range(2020,2022).toString().split(","))


    const [ranges, setRanges] = useState(["2022"]);
    
    const [selectedOption, setSelectedOption] = useState(options[0].value);
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


    /*     //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
        getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
            setData(responseData.data);
            console.log(data);
    
            //console.log(responseData.data[0].CODIGO_FICHA);  
    
        }); */




    //FILTRAR POR AÑO
    const filterData = (anno: string) => {


        const filtData = data.filter(function (fecha) {
            return fecha.PERIODO_FORMAT.split("-")[1] == anno;
        });

        setFilteredData(filtData)

    }

    //SELECCIONAR AÑO PARA FILTRADO
    const handleChangeSelect = (event: any) => {

        const min = Math.min(...data.map(o => Number(o.PERIODO_FORMAT.split("-")[1])), 30000);
        const max = Math.max(...data.map(o => Number(o.PERIODO_FORMAT.split("-")[1])), 0);
        setRanges(range(min,max).toString().split(","))

        
        //LLAMADO A LA REQUEST Y GUARDADO DEL A INFORMACINO
        getLiquidaciones({ TOKEN: TOKEN }).then((responseData: any) => {
            setData(responseData.data);
            console.log(data);

            //console.log(responseData.data[0].CODIGO_FICHA);  

        });

        setSelectedOption(event.value)
        filterData(event.value)
    }




    return (


        <Container>
            


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

                        <StyledSelect classNamePrefix="Select"
                            options={ranges.map( elem => ({label: elem, value: elem}))}
                            onChange={handleChangeSelect}
                        />





                    </IonCol>
                </IonRow>



            
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
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    .select{
        margin-right: 10%
    }

    .select{
        height: 30px;
        width: 100%;
        border: 1px solid #ff4d4c;
        cursor: pointer;
        color: #ff4d4c

       border-color: #ff4d4c
       
        
        
    }
`

const StyledSelect = styled(Select)`

width: 100px;
heigth: 10%;
  .Select__control {
    height: 40px;
    width: 100%;
    border: 1px solid #ff4d4c;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: #ff4d4c;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: true;
  }

  .Select__menu {
    color:#ff4d4c;
  }
`;