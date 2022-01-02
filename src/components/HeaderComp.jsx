import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import SideMenu from "./SideMenu";
import { arrowBackOutline } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { actionSetNavTo } from './../actions/index';
const HeaderComp = ({ title, mode, showSideMenu, showBackButton, backPage ,buttons }) => {
  const dispatch = useDispatch(null);
  const handleMenuOrBackBtn = () => {
    if (showSideMenu === true && showBackButton === true) {
      console.error("SideMenu and BackButton can't be enabled together");
    } else if (showSideMenu) {
      return <IonMenuButton slot="start" />;
    } else if (showBackButton) {
      return (
        <IonButton
          slot="start"
          fill="clear"
          onClick={() => dispatch(actionSetNavTo(backPage))}
        >
          <IonIcon icon={arrowBackOutline} size="large" color="dark" />
        </IonButton>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      <SideMenu />
      <IonHeader>
        <IonToolbar mode={mode}>
          {handleMenuOrBackBtn()}
          <IonTitle>{title}</IonTitle>
          {buttons && <IonButtons slot="end">{buttons}</IonButtons>}
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default HeaderComp;
