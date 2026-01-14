// src/pages/Education.tsx
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

const Education: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Education</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding" style={{ background: '#f8f9fa' }}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Education</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <ul>
            <li><strong>Northern Bukidnon State College</strong> – 2025–2026</li>
            <li><strong>Libona National High School</strong> – 2007–2008</li>
          </ul>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Education;
