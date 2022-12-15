import React, {useState} from 'react';
import {Verisoul} from 'verisoul';
import Accountlist from './accountlist';

const App = () => {
    const [sessionToken, setSessionToken] = useState();
    const [showVerisoul, setShowVerisoul] = useState(false);

    const initVerisoul = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/session`);
            if (!response.ok) {
                throw new Error(`failed to init Verisoul session: ${response.status}`);
            }

            const {sessionToken} = await response.json();
            console.log(sessionToken);

            setSessionToken(sessionToken);
            setShowVerisoul(true);
        } catch (err) {
            console.error(err);
        }
    }

    const eventHandler = async (event) => {
        if (event?.complete) {
            try {
                const response = await fetch(`http://localhost:5001/api/account/${event?.accountId}`);
                if (!response.ok) {
                    throw new Error(`failed to get Verisoul account: ${response.status}`);
                }

                setTimeout(() => { // show the completed screen for a few seconds
                    setShowVerisoul(false);
                }, 3000);
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <div>
            {showVerisoul && sessionToken
                ? <div className={'app vpopup'}>
                    <Verisoul
                        session={sessionToken}
                        onComplete={eventHandler}
                        environment={process.env.REACT_APP_VERISOUL_ENV}/>
                </div>
                :
                <div className={'app'}>
                    <h1>Verisoul CRA Sample App</h1>
                    <button onClick={initVerisoul}>Begin Verification</button>
                    <Accountlist/>
                </div>
            }
        </div>
    );
}

export default App;
