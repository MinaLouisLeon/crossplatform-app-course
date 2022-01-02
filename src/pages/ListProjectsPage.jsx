import {
  IonActionSheet,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSetNavTo } from './../actions/index';
const ListProjectPage = () => {
  const dispatch = useDispatch(null);
  const [showActionSheet, setShowActionSheet] = useState(false);
  return (
    <>
      <IonList>
        <IonItem button onClick={() => setShowActionSheet(true)}>
          <IonLabel>Project 1</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Project 2</IonLabel>
        </IonItem>
      </IonList>
      <IonButton expand="block" onClick={() => dispatch(actionSetNavTo("AddProjectPage"))}>
        Add Project
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        header="Project 1"
        buttons={[
          {
            text: "Open",
            handler: () => console.log("open"),
          },
          {
            text: "Delete",
            role: "destructive",
            handler: () => console.log("delete"),
          },
          {
            text: "Cancel",
            role: "cancel",
            handler: () => console.log("cancel"),
          },
        ]}
      />
    </>
  );
};

export default ListProjectPage;
