import {
  IonButton,
  IonCard,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";
const AddProjectPage = () => {
  const [projectName, setProjectName] = useState("");
  return (
    <IonCard>
      <form>
        <IonItem>
          <IonLabel>Project Name :</IonLabel>
          <IonInput
            required
            type="text"
            value={projectName}
            onIonChange={(e) => setProjectName(e.detail.value)}
          />
        </IonItem>
        <IonButton type="submit" color="success" expand="block">
          Save
        </IonButton>
      </form>
    </IonCard>
  );
};

export default AddProjectPage;
