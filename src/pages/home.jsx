import { makeStyles } from "@material-ui/core";
import React from "react";
import profilPic from './../assets/Profil_pic.jpeg'

const useStyles = makeStyles((theme) => ({

    pages: {
        height: "100vh",
        width: "100%",
        overflow: "hidden",

    },

    content: {
        height: "100vh",
        width: "80%",
        marginLeft: "10%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center"
    },

    content2:{
        height: "100vh",
        width: "80%",
        marginLeft: "10%",
    },

    name: {
        display: "block",
        fontSizeAdjust: "1",
    },
    sousname:{
        color: "#e2f1f8"
    },
    page1Left:{
        order: 1,
        flex: 3
    },
    page1Right:{
        order: 2,
        flex: 2
    },

    profilpic:{
        borderradius: "5px",
        height: "40vh"
    }
    

}));



export default function Home(props){

    /*
    var item = 1;
    var previous = -1;
    var d = new Date();
    var s = d.getTime();

    window.addEventListener('scroll', () => {
        var ScrolledDate = new Date();
        var dscrolled = ScrolledDate.getTime();
        console.log(dscrolled - s)
        if(dscrolled - s >= 700){
            var scrolled = window.scrollY;
            console.log("Scroll: "+scrolled)
            console.log("Previous: "+ previous)
            
            if(scrolled > previous){
                if(item < 3){
                    item++;
                }
            }
            if(scrolled < previous){
                if(item > 1){
                    item--;
                }
            }
            previous = scrolled;
            var itemdoc = document.getElementById(item);
            itemdoc.scrollIntoView();
            s = dscrolled;
        }
    })
    */

    const classes = useStyles();

    return (
        <div>
            <div id={1} className= {classes.pages}>
                <div className= {classes.content}>
                    <div className= {classes.page1Left}>
                        <h1 className={classes.name}>Hi, I'm <span style={{color: "#7e57c2"}}>Laurent Savivanh</span></h1>
                        <h2 className={classes.sousname}>I'm a French Engineering Student in <span style={{color: "#42a5f5"}}>Software Development</span></h2>
                    </div>
                    
                </div>
            </div>
            <div id={2} className= {classes.pages}>
                
            <div className= {classes.content2}>
                <h1>About Me</h1>
                    <div>
                        <img className={classes.profilpic} src={profilPic} alt="profilPic"></img>
                        <h2></h2>

                    </div>
                </div>
            </div>
            <div id={3} className= {classes.pages}>
                <div className= {classes.content2}>
                    <h1>HOME</h1>
                </div>
            </div>
        </div>
    )
}