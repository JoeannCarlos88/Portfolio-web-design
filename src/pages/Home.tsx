import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <h2>Joeann B. Carlos</h2>
            <p>
              I am a motivated and responsible student seeking an opportunity
              to gain practical experience, develop professional skills, and
              contribute positively to an organization.
            </p>

            <p><strong>Email:</strong> joeanncarlos@gmail.com</p>
            <p><strong>Phone:</strong> 0975 629 4021</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
