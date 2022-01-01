import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import SideMenu from "../components/SideMenu";
import { useHistory } from "react-router";
const ListProjectPage = () => {
    const history = useHistory(null);
    return(
        <IonPage>
            <SideMenu />
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start" />
                    <IonTitle>
                        Projects
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen id="include-sidemenu">
                <IonList>
                    <IonItem>
                        <IonLabel>
                            Project 1
                        </IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>
                            Project 2
                        </IonLabel>
                    </IonItem>
                </IonList>
                <IonButton expand="block" onClick={() => history.push('/addProject') }>Add Project</IonButton>
            </IonContent>
        </IonPage>
    )
}

export default ListProjectPage;