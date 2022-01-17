import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import CharacterSelect from './CharacterSelect'
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


export default function MapSitePage(props) {
    if (props.name !== "Haven"){
        var defaultcount = 1;

        get(child(dbRef, `${props.name}/${props.side}/DefaultSpread/Lineup${defaultcount}`)).then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val().LineupName);
              console.log(snapshot.val().LineupDescription);
              console.log(snapshot.val().LineupVideo);              
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        return (
            <div className="mapsitepage">
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="a-site" className="mapsiteheader">
                        <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                        <CharacterSelect/>
                    </div>
                    <div id="a-site-row" className="row">
                        <div className="item">
                            <SiteCard name="Heaven to Site" desc="Something about the lineup, provide details and visual tips to assist the player in achieving the intended result easier."/>
                        </div>
                        <div className="item">
                            <SiteCard name="Heaven to Generator" desc=""/>
                        </div>
                        <div className="item">
                            <SiteCard name="Heaven to Mid" desc=""/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="b-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                        <CharacterSelect/>
                    </div>
                    <div id="b-site-row" className="row">
                        <div className="item">
                            <SiteCard name="CT to Main Arch"/>
                        </div>
                        <div className="item">
                            <SiteCard name="CT to Site"/>
                        </div>
                        <div className="item">
                            <SiteCard name="CT to Market"/>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
    // If map name is equal to Haven, then return the proper site page. 
    return (
        <div className="mapsitepage">
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="a-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect/>
                </div>
                <div id="a-site-row" className="row">
                    <div className="item">
                        <SiteCard name="Heaven to Site"/>
                    </div>
                    <div className="item">
                        <SiteCard name="Heaven to Generator"/>
                    </div>
                    <div className="item">
                        <SiteCard name="Heaven to Mid"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="b-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect/>
                </div>
                <div id="b-site-row" className="row">
                    <div className="item">
                        <SiteCard name="CT to Main Arch"/>
                    </div>
                    <div className="item">
                        <SiteCard name="CT to Site"/>
                    </div>
                    <div className="item">
                        <SiteCard name="CT to Market"/>
                    </div>
                </div>
            </div>
            <br/>
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="c-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} C Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect/>
                </div>
                <div id="c-site-row" className="row">
                    <div className="item">
                        <SiteCard name="Window to Default"/>
                    </div>
                    <div className="item">
                        <SiteCard name="Window to Back-site"/>
                    </div>
                    <div className="item">
                        <SiteCard name="Mid to A-side plant"/>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
    
}
