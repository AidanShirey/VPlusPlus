import React from 'react';
import './LineupMap.css';
import LSiteCard from './LSiteCard';
import { initializeApp } from "firebase/app"
import { getDatabase, ref, child, get} from "firebase/database"

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



export default class LineupMap extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.side = this.props.side;
        this.site = this.props.site;
        this.sort = this.props.sort;
        this.state = {itemList: []};
    }

    componentDidMount(){
        get(child(dbRef, `${this.name}/${this.side}/${"A-Site"}/${this.sort}/`)).then((snapshot) => {
            if (snapshot.exists()) {
                let total = snapshot.size;
                let child = 1;
                let lineupselect = "Lineup" + child;
                let lineupX = snapshot.child(lineupselect).val().LineupX;
                let lineupY = snapshot.child(lineupselect).val().LineupY;
                if (total !== 0){
                    while (child <= total){
                        let point = (<div style={{top: lineupY, left: lineupX}} key="pointa{child}" className='pointa' onClick={() => this.props.handler({lineupSort: this.sort, site: "A-Site"})}></div>);
                        this.setState({itemList: [...this.state.itemList, point]});
                        child++;
                    } 
                }
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              }); 

        get(child(dbRef, `${this.name}/${this.side}/${"B-Site"}/${this.sort}/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    let total = snapshot.size;
                    let child = 1;
                    let lineupselect = "Lineup" + child;
                    let lineupX = snapshot.child(lineupselect).val().LineupX;
                    let lineupY = snapshot.child(lineupselect).val().LineupY;
                    
                    if (total !== 0){
                        while (child <= total){
                            let point = (<div style={{top: lineupY, left: lineupX}} key="pointb{child}" className='pointb' onClick={() => this.props.handler({lineupSort: this.sort, site: "B-Site"})}></div>);
                            this.setState({itemList: [...this.state.itemList, point]});
                            child++;
                        } 
                    }
                    } else {
                      console.log("No Data Available");
                    }
            }).catch((error) => {
                console.error(error);
            }); 
    }

    render(){
        return (
            <div className='lineupmap'>
                <LSiteCard name={this.props.name} side={this.props.side} site={this.props.site} sort={this.props.sort} count={1}/>
                <div className={`plotcontainer ${this.name}map`}>
                    <div className='plot'>
                        {this.state.itemList}
                    </div>
                </div>
            </div>
        )
    }
}