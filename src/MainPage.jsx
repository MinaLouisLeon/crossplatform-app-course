import { IonContent,IonPage} from "@ionic/react"
import { useSelector } from "react-redux";
import HeaderComp from "./components/HeaderComp";
import LoginPage from "./pages/LoginPage";
import ListProjectPage from "./pages/ListProjectsPage";
import AddProjectPage from "./pages/AddProjectPage";
const MainPage = () => {
    const pageData = useSelector(state => state.pageContentReducer.pageData);
    const handleNavPagesContent = () => {
        switch(pageData.pageName){
            case 'LoginPage' :
                return <LoginPage />
            case 'ListProjectsPage' :
                return <ListProjectPage />
            case 'AddProjectPage' :
                return <AddProjectPage />
            default :
                return <ListProjectPage />
        }
    }
    return(
        <IonPage>
            <HeaderComp 
                title={pageData.pageTitle}
                showSideMenu={pageData.showSideMenu}
                showBackButton={pageData.showBackButton}
                backPage={pageData.backPage}
                mode={pageData.mode}
            />
            <IonContent fullscreen id="include-sidemenu">
                {handleNavPagesContent()}
            </IonContent>
        </IonPage>
    )
}

export default MainPage;