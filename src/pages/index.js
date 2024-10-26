import Layout from "../components/layout";
import * as React from "react"
import { borderRadius, Color } from "../constants/constants";
import { StaticImage } from "gatsby-plugin-image";

import "../images/send.png"
import ObjectView from "../components/objectView";

const IndexPage = () => {
    
    const[messages, setMessages] = React.useState([])
    const[currentInput, setCurrentInput] = React.useState("")

    const chatEnd = React.useRef(null)

    const AddMessage = () => {
        if(currentInput.trim() == "")
        {
            return
        }

        let newMessage = {
            fromUser: false,
            message: "Olá! Tudo bem?",
            output: undefined,
            input: undefined,
        }

        if(currentInput.toLowerCase().includes("customer"))
        {
            newMessage.message = "Aqui vai uns customer massa:"
            newMessage.input = {
                amount: 2,
                state: "Aprovado"
            }

            newMessage.output = [
                {
                    name: "Joselito Selvagem",
                    companyName: "Queijos Jucurutu",
                    stateCode: "RN",
                    cnpj: "12.900.00001-15"
                },
                {
                    name: "Auto_aWhraW1e",
                    companyName: "Hermes e Renato Inc.",
                    stateCode: "SP",
                    cnpj: "42.123.00001-15"
                }
            ]
        }

        setMessages([...messages, 
            {
                fromUser: true,
                message: currentInput
            },
            newMessage
        ])
        setCurrentInput("")

        setTimeout(() => {
            const {current} = chatEnd;
            current?.scrollIntoView({behavior: "smooth"});
        }, 100);
    }

    console.log(messages)

    let messageList = messages.map((e) => {

        if(e.output)
        {
            return (
                <div
                style={{display: "flex", justifyContent: "start", alignItems: "start"}}
                >
                    <div 
                    style={{
                        borderRadius: "1000px", 
                        display: "flex",
                        justifyContent: "center", 
                        alignItems: "center",
                        height: "2.5rem", 
                        width: "2.5rem", 
                        marginRight: "1rem",
                        border: "1px solid " + "gray", 
                        boxShadow: "0px 1px 3px gray",
                        backgroundColor: Color.mainLight,
                        textShadow: "0px 2px 2px gray"
                    }}
                    >
                    <p style={{margin: "0", color: "white", fontWeight: "bolder", fontSize: "24px"}}>{e.fromUser? "U": "C"}</p>
                    </div>
                    <div
                    style={{display: "block", justifyContent: "start", alignItems: "start"}}
                    >
                        <p style={{fontWeight: "bold", marginBottom: "2px", fontSize: "24px"}}>{e.fromUser? "Usuário": "Chatbot"}</p>
                        <ObjectView input={e.input} output={e.output} />

                    </div>
                </div>
            )
        }

        return (
            <div
            style={{display: "flex", justifyContent: "start", alignItems: "start"}}
            >
                <div 
                style={{
                    borderRadius: "1000px", 
                    display: "flex",
                    justifyContent: "center", 
                    alignItems: "center",
                    height: "2.5rem", 
                    width: "2.5rem", 
                    marginRight: "1rem",
                    border: "1px solid " + "gray", 
                    boxShadow: "0px 1px 3px gray",
                    backgroundColor: Color.mainLight,
                    textShadow: "0px 2px 2px gray"
                }}
                >
                <p style={{margin: "0", color: "white", fontWeight: "bolder", fontSize: "24px"}}>{e.fromUser? "U": "C"}</p>
                </div>
                <div
                style={{display: "block", justifyContent: "start", alignItems: "start"}}
                >
                    <p style={{fontWeight: "bold", marginBottom: "2px", fontSize: "24px"}}>{e.fromUser? "Usuário": "Chatbot"}</p>
                    <p style={{whiteSpace: "pre-wrap"}}>{e.message}</p>
                </div>
            </div>
        )
    })

    return(

        <Layout>
        <div 
        style={{
        maxHeight: "80%", 
        borderRadius: borderRadius, 
        border: "2px solid #bbb", 
        boxShadow: "0px 4px 5px #ccc"
        }}>

            <div style={{
                padding: "1rem",
                overflow: "auto",
                height: "60vh"
            }}>

                {messageList}
                <div ref={chatEnd} id="scrollEnd"></div>
            </div>


            <div style={{
                backgroundColor: Color.mainVeryLight, 
                padding: "1rem", 
                width: "100%",
                borderBottomLeftRadius: borderRadius, 
                borderBottomRightRadius: borderRadius,
                borderTop: "2px solid #bbb"

                }}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    AddMessage()
                }} 
                style={{
                    display: "flex", 
                    justifyContent: "start", 
                    alignItems: "start"
                }}
                >
                    <input 
                    style={{width: "100%", border:"0px", borderBottom: "2px solid black", padding: ".5rem", fontSize: "16px", backgroundColor: Color.mainVeryLight,
                        outline:"none", marginRight: "1rem"
                    }}
                    onChange={(e) => {
                        setCurrentInput(e.target.value)
                    }}
                    value={currentInput}
                    type="text" />
                    
                    <button 
                    type="submit"
                    className="rounded"
                    style={{
                        borderRadius: "2000px", 
                        height:"2.5rem", 
                        width: "2.5rem",
                        color: "white",
                        backgroundColor: Color.main,
                        border: "0",
                        padding: "10px"
                    }}
                    >
                        <StaticImage src={"../images/send.png"} />
                    </button>
                </form>
            </div>
        </div>
    </Layout>
    )
}

export default IndexPage