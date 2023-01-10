import React, {useState, useEffect} from "react"
import "./loginscreen.css"

export default function Loginscreen () 
{

    const [checkStateMusic, setCheckStateMusic] = useState(false)
    const [checkStateAnim, setCheckStateAnim] = useState(false)

    useEffect(() => {
        if(checkStateMusic === true){
            document.querySelector('.videoSeasonIntro').volume = 0
        }else{
            document.querySelector('.videoSeasonIntro').volume = 1
        }
    }, [checkStateMusic])

    useEffect(() => {
        if(checkStateAnim === true){
            document.querySelector('.StaticImage').style.display = "block"
        }else{
            document.querySelector('.StaticImage').style.display = "none"
        }
    }, [checkStateAnim])

    return(
        <div className="divContainerLoginScreen">
            <div className="divMainBodyLoginScreen">

                {/* Parte do Video */}
                <div className="divVideoBodyLoginScreen">
                    <img className="StaticImage" src={require('./assets/images/StaticImage.png')}/>
                    <img className="RiotLogo" src={require('./assets/images/RiotGamesLogo.PNG')}/>
                    <video className="videoSeasonIntro" loop autoPlay={true} src={require('./assets/videos/seasonintro.mp4')} type="video/mp4"></video>
                    <div>
                        <label><input onClick={() => setCheckStateAnim(!checkStateAnim)} checked={checkStateAnim} type="checkbox"></input>Disable animation</label>
                        <label><input onClick={() => setCheckStateMusic(!checkStateMusic)} checked={checkStateMusic} type="checkbox"></input>Disable Music</label>
                    </div>
                </div>

                {/* Parte do Login */}
                <div className="divUserBodyLoginScreen">
                    <img style={{width: "24vw"}} src={require("./assets/images/LeagueBigLogo.png")}/>
                    <h2>Sign in</h2>
                    <input type="text" placeholder="USERNAME"></input>
                    <input type="password" placeholder="PASSWORD"></input>
                    <label><input type="checkbox"></input>Stay signed in</label>
                    <button disabled>SIGN IN</button>
                    <p>v0.1110012023</p>
                </div>

            </div>
        </div>

    )
}