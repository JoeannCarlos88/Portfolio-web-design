import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Pages */
import FrontPage from './pages/FrontPage';
import Home from './pages/Home';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

/* Initialize Ionic */
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">

        {/* SIDE MENU */}
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/">Front Page</IonItem>
              <IonItem routerLink="/home">About Me</IonItem>
              <IonItem routerLink="/education">Education</IonItem>
              <IonItem routerLink="/skills">Skills</IonItem>
              <IonItem routerLink="/experience">Experience</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        {/* MAIN CONTENT */}
        <IonRouterOutlet id="main">
          {/* FrontPage loads first */}
          <Route exact path="/" component={FrontPage} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/experience" component={Experience} />

          {/* Fallback redirect for unknown routes */}
          <Route render={() => <Redirect to="/" />} />
        </IonRouterOutlet>

      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
