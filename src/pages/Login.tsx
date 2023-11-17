import { IonAvatar, IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';

import { useState } from 'react';
import{loginUser} from '../firebaseConfig'
const Login: React.FC = () => {
    const[Username, setUsername] = useState('')
    const[Password, setPassword] = useState('')

     async function login() {
            const res = await loginUser(Username, Password)
            console.log(`${res ? 'Login success' : 'Login failed'}`)
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
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
         <IonButton color="light"   onClick={login}>
            Log In
         </IonButton>
         <IonButton  color="primary">Register</IonButton>
        </IonContent>
        
      </IonPage>
    );
  };
  
  export default Login;