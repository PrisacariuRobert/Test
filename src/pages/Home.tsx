import { IonAvatar, IonButton, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
const arr =[
  {
    name: 'Finn',
    desc: 'This is guy is a guy'
  },
  {
    name: "Rey",
    desc: 'This guy boxing'
  },
  {
    name: 'Han',
    desc: 'He is from Albenia'
  }
]



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton color={'primary'}>New Mail</IonButton>
       <IonList>
        {arr.map(elem => (
        <IonItemSliding key={elem.name}>
          <IonItem>
            <IonAvatar>
              <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png` }/>
            </IonAvatar>
            <IonLabel className='ion-padding'>
              <h2>{elem.name}</h2>
              <h3>{elem.desc}</h3>
              <p>Description</p>
            </IonLabel>
            </IonItem>  
            <IonItemOptions side='end' >
              <IonItemOption color='danger' onClick={() => alert('Are you sure you want to delete?')}>
                Delete
              </IonItemOption>
              
              
              

            </IonItemOptions>
            <IonItemOptions side='start'>
              <IonItemOption>
                New Messsage
              </IonItemOption>

              

            </IonItemOptions>
        </IonItemSliding>
        ))}
       </IonList>
        
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
