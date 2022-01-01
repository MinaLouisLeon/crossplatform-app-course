import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react';

const SideMenu = () => {
    return(
        <IonMenu contentId='include-sidemenu'>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Project Plus
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel>
                            Projects
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Add Project
                        </IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default SideMenu;