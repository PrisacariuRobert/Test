import { IonAvatar, IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const[Username, setUsername] = useState('')
    const[Password, setPassword] = useState('')
    const[cPassword, setcPassword] = useState('')

    function registerUser() {
            console.log(Username, Password,cPassword )
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
         <IonInput 
            placeholder='Username'
            onIonChange={(e:any) => setUsername(e.target.value)}/>
         <IonInput 
             type='password'
            placeholder='Password'
            onIonChange={(e:any) => setPassword(e.target.value)}
          />
          <IonInput 
           type='password'
            placeholder='Verify Password'
            onIonChange={(e:any) => setcPassword(e.target.value)}
          />
          <IonButton color="primary" onClick={registerUser} routerLink='/home'>
                Create the account
          </IonButton>
          <p>Already have an Acount? <Link to="/login">Log in</Link></p>
         
         
         
        </IonContent>
        
      </IonPage>
    );
  };
  
  export default Register;