import { IonActionSheet, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import SideMenu from "../components/SideMenu";
import { useHistory } from "react-router";
import { useState } from "react";
const ListProjectPage = () => {
    const history = useHistory(null);
    const [showActionSheet,setShowActionSheet] = useState(false);
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
                    <IonItem button onClick={() => setShowActionSheet(true)}>
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
                <IonActionSheet 
                    isOpen={showActionSheet}
                    onDidDismiss={() => setShowActionSheet(false)}
                    header="Project 1"
                    buttons={[
                        {
                            text : "Open",
                            handler : () => console.log("open")
                        },{
                            text : "Delete",
                            role : "destructive",
                            handler : () => console.log("delete")
                        },{
                            text : "Cancel",
                            role : "cancel",
                            handler : () => console.log("cancel")
                        }
                    ]}
                />
            </IonContent>
        </IonPage>
    )
}

export default ListProjectPage;