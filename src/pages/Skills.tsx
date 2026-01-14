// src/pages/Skills.tsx
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

const Skills: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Skills</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding" style={{ background: '#f8f9fa' }}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Skills</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <ul>
            <li>Basic computer skills (Microsoft Word, PowerPoint)</li>
            <li>Coding</li>
            <li>Communication skills</li>
            <li>Teamwork and time management</li>
          </ul>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default Skills;
