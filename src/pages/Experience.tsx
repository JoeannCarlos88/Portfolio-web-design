// src/pages/Experience.tsx
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

const Experience: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Experience</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding" style={{ background: '#f8f9fa' }}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Experience</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <ul>
            <li>Sales Clerk at Gaisano</li>
            <li>Barangay Clerk & Sanitation Inspector</li>
          </ul>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Experience;
