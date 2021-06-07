import { makeStyles } from "@material-ui/core";
import React from "react";
import { useScreenType } from './../components/common/useScreenType';

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

    name: {
        display: "block",
        fontSizeAdjust: "1",
    },
    sousname:{
        color: "#ccd5ae"
    },
    page1Left:{
        order: 1,
        flex: 3
    },
    page1Right:{
        order: 2,
        flex: 2
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

    const screenType = useScreenType();
    const classes = useStyles();

    return (
        <div>
            <div id={1} className= {classes.pages}>
                <div className= {classes.content}>
                    <div className= {classes.page1Left}>
                        <h1 className={classes.name}>LAURENT SAVIVANH</h1>
                        <h2 className={classes.sousname}>Software Developer</h2>
                    </div>
                    <div className={classes.page1Right}>
                        <h2 >OUIIIIIIIIIIIII</h2>
                    </div>
                    
                </div>
            </div>
            <div id={2} className= {classes.pages}>
            <div className= {classes.content}>
                    <h1>HOME</h1>
                </div>
            </div>
            <div id={3} className= {classes.pages}>
                <div className= {classes.content}>
                    <h1>HOME</h1>
                </div>
            </div>
        </div>
        
        
    )
}