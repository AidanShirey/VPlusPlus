import React, {useEffect, useState} from 'react'
import './SiteCard'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get} from "firebase/database"
import SiteCard from './SiteCard';
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

export default function MapSitePageRow(props){
    const [itemList, setitemList] = useState();
    const [lineupSite, setlineupSite] = useState();
    const [lineupSort, setlineupSort] = useState();
    useEffect(() => {
      if(props.site !== lineupSite){
        setlineupSite(props.site);
        setlineupSort(props.sort);
      }
      if(props.sort !== lineupSort){
        setlineupSite(props.site);
        setlineupSort(props.sort);
      }
      get(child(dbRef, `${props.name}/${props.site}/${props.sort}/`)).then((snapshot) => {
        if (snapshot.exists()) {
            let total = snapshot.size;
            let child = 1;
            let items = [];
            if (total !== 0){
                while (child <= total){
                    let lchild = child;
                    let k = "item" + lchild;
                    let k1 = "sitecard" + lchild;
                    items.push((<div key={k} className='item'>
                        <SiteCard key={k1} name={props.name} side={props.side} site={props.site} sort={props.sort} count={child}/>
                    </div>));
                    child++;
                } 
                setitemList(items);
            }
            } else {
              let items = [];
              console.log("No data available");
              items.push((<div className='error' key="error">Lineups unavailable: Agent does not have any lineups in this category. Please select another category to view lineups.</div>));
              setitemList(items);
            }
          }).catch((error) => {
            console.error(error);
          }); 
        }, [props.sort, props.site]);

    return (
        <div className='lrow'>
          {itemList}
        </div>
    )
}

