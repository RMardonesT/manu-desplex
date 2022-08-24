import { IonAccordion, IonAccordionGroup, IonButton, IonContent, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { Box, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { IoHomeOutline, IoDocumentTextOutline, IoDuplicateOutline, IoMailUnreadOutline, IoPersonCircleOutline } from 'react-icons/io5';
import Acordion from './Acordion';
import Calendar from './Calendar';
import Contratos from './Contratos';
import Gray_box from './Gray_box';
import Liquidaciones from './Liquidaciones';


import NavBar from "./Navbar"
import SEL from './sel';
import Vacaciones from './Vacaciones';





const JEISON = {
  data: [
    { title: "Nombre", content: "Juan Aguilera" },
    { title: "Tipo", content: "Simple" },
    { title: "Vinculo", content: "Hermano(a)" },
    { title: "Monto", content: "200.000" }
  ]
}


const Home: React.FC = () => {


  /*     const [flag, setFlag] = useState(true)
  
  const handleClick = () => {
      setFlag(!flag)
  }
   */

  const flag = false;

  return (
    <IonPage>


      <IonContent fullscreen>
        <NavBar />






        <Calendar/>
        {/* <Contratos /> */}
        {/* <Liquidaciones/> <Gray_box data = {JEISON.data}/> */}





        {/* 
        <BottomNavigation >

          <BottomNavigationAction onClick = {e => {console.log("PRESSED")}}  label="Home" icon= {<IoHomeOutline size = "20" /> } />
          <BottomNavigationAction onClick = {e => {console.log("PRESSED")}} label="Documentos" icon= {<IoDocumentTextOutline  size = "20"/>} />
          <BottomNavigationAction onClick = {e => {console.log("PRESSED")}}  label="Solicitud" icon={<IoDuplicateOutline size = "20" />} />
          <BottomNavigationAction onClick = {e => {console.log("pressed")}}  label="Solicitud" icon={<IoMailUnreadOutline size = "20"/>} />
          <BottomNavigationAction onClick = {e => {console.log("pressed")}}  label="Perfil" icon={<IoPersonCircleOutline size = "20" />} />
        </BottomNavigation>  */}


      </IonContent>

    </IonPage>
  );
};

export default Home;

function useState<T>(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
