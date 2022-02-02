import React, {useEffect, useState} from 'react'
import './SiteCard.css'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAd3JIcPWlZ5dtllHg15Cogya9HqEs1sWE",
  authDomain: "vplusplus-8bb54.firebaseapp.com",
  databaseURL: "https://vplusplus-8bb54-default-rtdb.firebaseio.com",
  projectId: "vplusplus-8bb54",
  storageBucket: "vplusplus-8bb54.appspot.com",
  messagingSenderId: "941977342831",
  appId: "1:941977342831:web:2d69a3bd598f91ffc74e9a"
};


initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());


export default function LSiteCard(props) {
  const [ lineupVideo, setlineupVideo ] = useState();
  const [ lineupName, setlineupName] = useState();
  const [ lineupDescription, setlineupDescription ] = useState();
  useEffect(() => {
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
    }, [props.sort, props.site]);

    return (
      <div className="lsitecard">
        <video className="sitecardlineup" src={lineupVideo} controls>
        </video>
        <div className={props.site}>
        <div className="sitecarddesc">
          <div className={`sitecardheader ${props.site}`}>
            <strong>{lineupName}</strong>
          </div>
          <hr/>
          <hr/>
          <p>
            <strong>{lineupDescription}</strong>
          </p>
          </div>
        </div>
      </div>
    ) 
          
}