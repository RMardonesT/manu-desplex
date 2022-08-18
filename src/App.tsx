import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


import NavBar from "./components/Navbar"
import Gray_box from './components/Gray_box';
import Liquidaciones from './components/Liquidaciones';


setupIonicReact();


const JEISON = {data : [
              { title: "Nombre", content: "Juan Aguilera" },
              { title: "Tipo", content: "Simple" },
              { title: "Vinculo", content: "Hermano(a)" },
              { title: "Monto", content: "200.000" }
            ]}

const App: React.FC = () => (
 <>
 <NavBar/>
<p></p>


 {/* <Gray_box data = {JEISON.data}/> */}
 <Liquidaciones/>

 

 </>
);

export default App;
