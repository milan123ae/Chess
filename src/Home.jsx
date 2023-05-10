import React, { useState } from "react";
import app from "./firebase";
import { Redirect } from "react-router";
import { auth, db } from './firebase'
import { useHistory } from 'react-router-dom'


export default function Home() {
    //const { currentUser } = auth
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    const [currentRadioValue, setCurrentRadioValue] = useState()
    const [currentRadioValue1, setCurrentRadioValue1] = useState()
    const [currentRadioValue11, setCurrentRadioValue11] = useState()

    const handleRadioChange = (e) => {
      setCurrentRadioValue(e.target.value);
    };

    const handleRadioChange1 = (e) => {
        setCurrentRadioValue1(e.target.value);
      };

      const handleRadioChange11 = (e) => {
        setCurrentRadioValue11(e.target.value);
      };

    function handlePlayMultiplayer() {
        setShowModal(true)
    }

    function onClick () {
    
        app.auth().signOut()
       
     }

    async function startOnlineGame() {
        const member = {
            uid: localStorage.getItem('userName'),
            piece: currentRadioValue,
            gametype:currentRadioValue1,
            movementtype:currentRadioValue11,
            name: localStorage.getItem('userName'),
            creator: true
        }
        const game = {
            status: 'waiting',
            members: [member],
            gameId: `${Math.random().toString(36).substr(2, 9)}_${Date.now()}`
        }
       // await db.collection('games').doc(game.gameId).set(game)
       //await db.collection('games').add(game)
       console.log(game);
                db.collection("games").add(game)
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
        history.push(`/game/${game.gameId}`)
    }

    return (
        <>

                    <label className="label">
                    <button className="button is-primary">
                        Play with computer
                    </button>
                    </label>
                    <br/><br/>
                    <label className="label">
                    <button className="button is-primary"
                        onClick={handlePlayMultiplayer}>
                        Play multiplayer
                    </button>
                    </label>
                    <br/><br/>
                    <label className="label">
                    <button className="button is-primary" onClick={onClick()}>Sign out</button>
                    </label>
            
            <div className={`modal ${showModal ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card">
                        <h1>Select options</h1><br />
                        <div>
                                <label className="label">
                                        <div>
                                        <input
                                        id="radio-item-1"
                                        name="radio-item-1"
                                        type="radio"
                                        value="w"
                                        onChange={handleRadioChange}
                                        checked={currentRadioValue === 'w'}
                                        />
                                        <label htmlFor="radio-item-1">White figure</label>
                                    </div>
                                </label>
                                    <div>
                                    <label className="label">
                                    
                                        <input
                                        id="radio-item-2"
                                        name="radio-item-2"
                                        type="radio"
                                        value="b"
                                        onChange={handleRadioChange}
                                        checked={currentRadioValue === 'b'}
                                        />
                                        <label htmlFor="radio-item-2">
                                            Black figure
                                        </label>
                                    </label>
                                    </div>
                         </div><br/>

                         <div>
                                        <div>
                                        <label className="label">
                                        <input
                                        id="radio-item-11"
                                        name="radio-item-11"
                                        type="radio"
                                        value="gametypeu"
                                        onChange={handleRadioChange1}
                                        checked={currentRadioValue1 === 'gametypeu'}
                                        />
                                        <label htmlFor="radio-item-11">Game unlimited time</label>
                                        </label>
                                    </div>
                                    <div>
                                    <label className="label">
                                        <input
                                        id="radio-item-22"
                                        name="radio-item-22"
                                        type="radio"
                                        value="gametypel"
                                        onChange={handleRadioChange1}
                                        checked={currentRadioValue1 === 'gametypel'}
                                        />
                                        <label htmlFor="radio-item-22">
                                            Game limited time
                                        </label>
                                        </label>
                                    </div>
                         </div><br/>

                         <div>
                                        <div>
                                        <label className="label">
                                        <input
                                        id="radio-item-111"
                                        name="radio-item-111"
                                        type="radio"
                                        value="movementtypeu"
                                        onChange={handleRadioChange11}
                                        checked={currentRadioValue11 === 'movementtypeu'}
                                        />
                                        <label htmlFor="radio-item-111">Movement unlimited time</label>
                                        </label>
                                    </div>
                                    <div>
                                    <label className="label">
                                        <input
                                        id="radio-item-222"
                                        name="radio-item-222"
                                        type="radio"
                                        value="movementtypel"
                                        onChange={handleRadioChange11}
                                        checked={currentRadioValue11 === 'movementtypel'}
                                        />
                                        <label htmlFor="radio-item-222">
                                            Movement limited time
                                        </label>
                                        </label>
                                    </div><br/>
                         </div>
                                        

                        <footer className="card-footer">
                                <button className="button is-primary"
                                    onClick={() => startOnlineGame()}>
                                    Start Game
                                </button>
                        </footer>
                    
                    </div>
                </div>
                <button className="modal-close is-large" onClick={() => setShowModal(false)}></button>
            </div>
        </>
    )
}