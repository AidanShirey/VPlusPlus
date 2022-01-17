import React, {useState} from 'react'
import './SiteCard.css'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd3JIcPWlZ5dtllHg15Cogya9HqEs1sWE",
  authDomain: "vplusplus-8bb54.firebaseapp.com",
  databaseURL: "https://vplusplus-8bb54-default-rtdb.firebaseio.com",
  projectId: "vplusplus-8bb54",
  storageBucket: "vplusplus-8bb54.appspot.com",
  messagingSenderId: "941977342831",
  appId: "1:941977342831:web:2d69a3bd598f91ffc74e9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());


export default function SiteCard(props) {
        const [ lineupVideo, setlineupVideo ] = useState();
        const [ lineupName, setlineupName] = useState();
        const [ lineupDescription, setlineupDescription ] = useState();
        get(child(dbRef, `${props.name}/${props.side}/${props.site}/${props.sort}/Lineup${props.count}`)).then((snapshot) => {
        if (snapshot.exists()) {
            setlineupVideo(snapshot.val().LineupVideo);
            setlineupName(snapshot.val().LineupName);
            setlineupDescription(snapshot.val().LineupDescription);          
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });  
        return (
            <div className="sitecard">
                <video className="sitecardlineup" src={lineupVideo} controls>
                </video>
                <div className="sitecarddesc">
                    <div className="sitecardheader">
                        <strong>{lineupName}</strong>
                    </div>
                    <hr/>
                    <hr/>
                    <p>
                        <strong>{lineupDescription}</strong>
                    </p>
                </div>
            </div>
        )       
}
