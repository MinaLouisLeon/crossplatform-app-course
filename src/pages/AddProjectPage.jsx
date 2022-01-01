import { IonButton, IonCard, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useState } from "react";
const AddProjectPage = () => {
    const [projectName,setProjectName] = useState("");
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Add Project
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                   <form>
                   <IonItem>
                        <IonLabel>
                            Project Name :
                        </IonLabel>
                        <IonInput 
                            required
                            type="text"
                            value={projectName}
                            onIonChange={(e) => setProjectName(e.detail.value)}  
                        />
                    </IonItem>
                    <IonButton type="submit" color='success' expand="block" >Save</IonButton>
                   </form>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}

export default AddProjectPage;