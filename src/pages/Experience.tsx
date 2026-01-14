import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/react';

const Experience: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Experience</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h3>Sales Clerk</h3>
            <p>Gaisano Mall</p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <h3>Barangay Clerk</h3>
            <p>Barangay Office</p>
            <p>Also served as Barangay Sanitation Inspector</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Experience;
