import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/react';

const Education: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Education</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h3>College</h3>
            <p><strong>Northern Bukidnon State College</strong></p>
            <p>Academic Year: 2025 – 2026</p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <h3>High School</h3>
            <p><strong>Libona National High School</strong></p>
            <p>Academic Year: 2007 – 2008</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Education;
