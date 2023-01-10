import React, {useState, useEffect} from "react"
import "./loginscreen.css"

export default function Loginscreen () 
{
    return(
        <div className="divContainerLoginScreen">
            <div className="divMainBodyLoginScreen">

                {/* Parte do Video */}
                <div className="divVideoBodyLoginScreen">
                    <img src={require('./assets/images/RiotGamesLogo.PNG')}/>
                    <video loop autoPlay={true} src={require('./assets/videos/seasonintro.mp4')} type="video/mp4"></video>
                    <div>
                        <label><input type="checkbox"></input>Disable animation</label>
                        <label><input type="checkbox"></input>Disable Music</label>
                    </div>
                </div>

                {/* Parte do Login */}
                <div className="divUserBodyLoginScreen">
                    <img style={{width: "24vw"}} src={require("./assets/images/LeagueBigLogo.png")}/>
                    <h2>Sign in</h2>
                    <input type="text" placeholder="USERNAME"></input>
                    <input type="password" placeholder="PASSWORD"></input>
                    <label><input type="checkbox"></input>Stay signed in</label>
                    <button disabled="true">SIGN IN</button>
                    <p>v0.1</p>
                </div>

            </div>
        </div>

    )
}