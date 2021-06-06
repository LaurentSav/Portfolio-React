import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";


const useStyles = makeStyles((theme) => ({

    pages: {
        height: "100vh",
        width: "100%",
        overflow: "hidden",
    },

    content: {

    }

}));



export default function Home(props){

    var item = 1;
    var previous = -1;

    window.addEventListener('scroll', () => {
        var scrolled = window.scrollY;
        if(scrolled > previous ){
            if(item < 2){
                item++;
            }
        }
        if(scrolled < previous){
            if(item > 1){
                item--;
            }
        }
        if(scrolled != previous){
            previous = scrolled;
            var itemdoc = document.getElementById(item);
            itemdoc.scrollIntoView();
        }
    })

    const classes = useStyles();

    return (
        <div>
            <div id={1} className= {classes.pages}>
                <h1>HOME</h1>
            </div>
            <div id={2} className= {classes.pages}>
                <h1>HOME2</h1>
            </div>
        </div>
        
        
    )
}