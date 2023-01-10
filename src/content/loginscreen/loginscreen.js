import React, {useState, useEffect} from "react"
import "./loginscreen.css"

export default function Loginscreen () 
{

    const [checkStateMusic, setCheckStateMusic] = useState(true)
    const [checkStateAnim, setCheckStateAnim] = useState(false)
    const [connection, setConnection] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [logging, setLogging] = useState(false)
    const [connectionMessage, setConnectionMessage] = useState("")

    useEffect(() => {
        if(username.length > 1 && password > 1){
            document.querySelector('#buttonSignIn').removeAttribute('disabled')
        }else{
            document.querySelector('#buttonSignIn').setAttribute('disabled',true)
        }
    })

    useEffect(() => {
        if(checkStateMusic === true){
            document.querySelector('.videoSeasonIntro').volume = 0
        }else{
            document.querySelector('.videoSeasonIntro').removeAttribute("muted")
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

    const callSignIn = () => {
        let audio = new Audio(require('./assets/audios/buttonclick.mp3'))
        audio.play()
        setLogging(true)
        setConnectionMessage("Connecting to database")
        document.querySelector('.inputBlock1').setAttribute('disabled', true)
        document.querySelector('.inputBlock2').setAttribute('disabled', true)
        document.querySelector('.inputBlock3').setAttribute('disabled', true)
        
        // fetch aqui
        if(connection === true){
            setConnectionMessage("Searching for user")
        }else{

            setConnectionMessage("Unable to reach servers")
            setTimeout(() => {
                document.querySelector('.inputBlock1').removeAttribute('disabled')
                document.querySelector('.inputBlock2').removeAttribute('disabled')
                document.querySelector('.inputBlock3').removeAttribute('disabled')
                setLogging(false)
            }, 1600)
        }
    }

    return(
        <div className="divContainerLoginScreen">

            <iframe src='https://olafwempe.com/mp3/silence/silence.mp3' type='audio/mp3' allow='autoplay' id='audio' style={{display: 'none'}}></iframe>
            <div className="divMainBodyLoginScreen">

                {/* Parte do Video */}
                <div className="divVideoBodyLoginScreen">
                    <div className="videoLoginShadow"></div>
                    <img className="StaticImage" src={require('./assets/images/StaticImage.png')}/>
                    <img className="RiotLogo" src={require('./assets/images/RiotGamesLogo.PNG')}/>
                    <video className="videoSeasonIntro" loop src={require('./assets/videos/seasonintro.mp4')} autoPlay={true} type="video/mp4"></video>
                    <div className="animationButton">
                        <label><input onClick={() => setCheckStateAnim(!checkStateAnim)} checked={checkStateAnim} type="checkbox"></input>Disable animation</label>
                        <label><input onClick={() => setCheckStateMusic(!checkStateMusic)} checked={checkStateMusic} type="checkbox"></input>Disable Music</label>
                    </div>
                </div>

                {/* Parte do Login */}
                <div className="divUserBodyLoginScreen">

                    <img style={{width: "24vw"}} src={require("./assets/images/LeagueBigLogo.png")}/>
                    <h2>Sign in</h2>
                    <input className="inputBlock1" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="USERNAME"></input>
                    <input className="inputBlock2" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD"></input>
                    <label className="staySignedIn"><input className="inputBlock3" type="checkbox"></input>Stay signed in</label>
                    { logging &&
                        <div style={{marginTop: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img className="loadingSpinner" src={require('./assets/images/spinner.png')}/>
                            <h3 id="statusLoging">{connectionMessage}</h3>
                        </div>
                    }
                    <button onMouseOver={() => {
                        let audio = new Audio(require('./assets/audios/buttonhover.mp3'))
                        audio.play()
                    }} 
                    id='buttonSignIn' className="inputBlock" disabled><label className="labelSignIn" onClick={(e) => {
                        callSignIn()
                    }}>SIGN IN</label></button>
                    <p>v0.1210012023</p>
                </div>

            </div>
        </div>

    )
}