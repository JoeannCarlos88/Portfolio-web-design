// src/pages/FrontPage.tsx
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon
} from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import './FrontPage.css';
import ResumeImage from '../assets/resume.jpg'; // keep button link intact

const FrontPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Front Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="frontpage-content">
        <div className="hero">
          <h1>Joeann B. Carlos</h1>
          <p>📞 09756294021 | 📧 joeanncarlos@gmail.com</p>
          <p className="hero-subtitle">
            A motivated and responsible individual seeking practical experience and opportunities to develop professional skills.
          </p>
          <IonButton
            color="primary"
            href={ResumeImage}
            target="_blank"
          >
            <IonIcon slot="start" icon={downloadOutline} />
            View Resume
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FrontPage;
