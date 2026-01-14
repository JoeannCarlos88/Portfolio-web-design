// src/pages/Home.tsx
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>About Me</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding" style={{ background: '#f8f9fa' }}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>About Me</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>I am a motivated and responsible person seeking opportunities to gain practical experience, develop professional skills, and contribute positively to an organization.</p>
          <p>Contact me at:</p>
          <ul>
            <li>Phone: 09756294021</li>
            <li>Email: joeanncarlos@gmail.com</li>
          </ul>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Home;
