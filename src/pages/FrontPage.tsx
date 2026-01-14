import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/react';

const FrontPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <h1>Joeann B. Carlos</h1>
        <h3>Student • Aspiring Developer</h3>

        <p>
          Welcome to my personal portfolio website.
        </p>

        <IonButton expand="block" routerLink="/home">
          View Portfolio
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FrontPage;
