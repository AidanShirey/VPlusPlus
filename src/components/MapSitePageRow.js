import React, {useEffect, useState} from 'react'
import './SiteCard'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get, firebase} from "firebase/database"
import SiteCard from './SiteCard';
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
export default function MapSitePageRow(props){
    const [itemList, setitemList] = useState();
    useEffect(() => {
    let cancel = false;
    if (cancel) return;
    get(child(dbRef, `${props.name}/${props.side}/${props.site}/${props.sort}/`)).then((snapshot) => {
        if (snapshot.exists()) {
            let total = snapshot.size;
            let child = 1;
            let items = [];
            if (total !== 0){
                while (child <= total){
                    items.push((<div key="item{child}" className='item'>
                        <SiteCard key="sitecard{child}" name={props.name} side={props.side} site={props.site} sort={props.sort} count={child}/>
                    </div>));
                    child++;
                } 
                setitemList(items);
            }

            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          }); 
          return () => {
            cancel = true;
          }
        }, []);

    return (
        <div className='row'>
          {itemList}
        </div>
    )
}

