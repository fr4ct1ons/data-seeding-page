import * as React from "react"
import { Color } from "../constants/constants";
import { StaticImage } from "gatsby-plugin-image";

function ObjectView(props) {


    let inputList = ""

    let style = {
        borderRadius: "2000px", 
        margin: "0",
        border: "2px solid #aaa",
        padding: ".2rem",
        paddingRight: ".5rem",
        paddingLeft: ".5rem",
        marginRight: ".75rem",
        marginBottom: ".4rem"
    }

    try 
    {
        inputList = Object.keys(props.input).map((key, i) => {
            let value = props.input[key];
            return (
                <div style={{display: "flex", justifyContent: "start", alignItems: "start"}}>
                    <p style={{...style, backgroundColor: Color.mainVeryLight}}>{key}</p>
                    <p style={{...style}}>{value}</p>
                </div>
            )
        })    
    } 
    catch (error) 
    {
        
    }

    let outputList = ""

    try 
    {
        outputList = props.output.map((c, i) => {
            return (
                <div style={{marginBottom: "2rem"}}>
                    {
                        Object.keys(c).map((key, i) => {
                            let value = c[key];
                            return (
                                <div style={{display: "flex", justifyContent: "start", alignItems: "start"}}>
                                    <p style={{...style, backgroundColor: Color.mainVeryLight}}>{key}</p>
                                    <p style={{...style,}}>{value}</p>
                                </div>
                            )
                        })  
                    }
                </div>
            )  
        })
    } 
    catch (error) 
    {
        
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(props.output))
    }

    return (
        <div style={{display: "block", justifyContent: "start", alignItems: "start"}}>
            <h4 style={{marginTop: ".5rem", marginBottom: ".5rem"}}>Input:</h4>
            {inputList}
            <h4 style={{marginTop: ".5rem", marginBottom: ".5rem"}}>Output:</h4>
            {outputList}

            <button className="rounded" onClick={handleCopy} style={{height: "2.1rem", width: "2.1rem", backgroundColor: Color.main}}>
                <StaticImage src={"../images/clipboard.png"} />
            </button>
        </div>
    )
}

export default ObjectView;