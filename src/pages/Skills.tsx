import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem
} from '@ionic/react';

const Skills: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Skills</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem>Basic Computer Skills</IonItem>
          <IonItem>Microsoft Word & PowerPoint</IonItem>
          <IonItem>Basic Coding / Programming</IonItem>
          <IonItem>Communication Skills</IonItem>
          <IonItem>Teamwork & Time Management</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Skills;
