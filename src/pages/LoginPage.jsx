import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import { IonAlert, IonCard } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { actionSetNavTo, actionSetUser } from './../actions/index';
const LoginPage = () => {
    let userInfo = null;
    const history = useHistory(null);
    const dispatch = useDispatch(null);
    const [showLoginAlert,setShowLoginAlert] = useState(false);
    const uiConfig = {
        signInOptions : [
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult : function(authResult,redurectUrl){
                console.log(authResult);
                if(!authResult.user.emailVerified){
                    setShowLoginAlert(true)
                }else{
                    userInfo = {
                        uid : authResult.user.uid,
                        displayName : authResult.user.displayName,
                        email : authResult.user.email,
                        phoneNumber : authResult.user.phoneNumber,
                        photoURL : authResult.user.photoURL,
                    }
                    dispatch(actionSetUser(userInfo));
                    dispatch(actionSetNavTo("ListProjectsPage"))
                }
                return false
            }
        }
    }
    return(
        <>
            <IonCard>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </IonCard>
            <IonAlert 
                isOpen={showLoginAlert}
                onDidDismiss={() => setShowLoginAlert(false)}
                message={"Email verification is needed to continue using this app, please check your email."}
                buttons={[
                    {
                        text : "OK",
                        handler : () => {
                            history.go(0);
                        }
                    }
                ]}
            />
        </>
    )
}

export default LoginPage;