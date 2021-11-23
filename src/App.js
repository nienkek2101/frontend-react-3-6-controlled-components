import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [messageValue, setMessageValue] = React.useState('');
    const [newsletterValue, toggleNewsletterValue] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("De data is verstuurd");
        // console.log(setAgeValue);
        // console.log(setMessageValue);
        setNameValue(e.target.value);
        setAgeValue(e.target.value);
        setMessageValue(e.target.value);
    }

  return (
      <>
        <div id="form-container">
            <h2>Gegevens</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form-name">
                    Naam:
                    <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                </label>
                <label htmlFor="form-age">
                    Leeftijd:
                    <input
                        type="text"
                        id="form-age"
                        name="age"
                        value={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                    />
                </label>
                <label htmlFor="form-message">
                    Opmerkingen:
                    <input
                        type="text"
                        id="form-message"
                        placeholder="Wat vond je van het recept?"
                        name="message"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                    />
                </label>
                <label htmlFor="form-newsletter">
                    Opmerkingen:
                    <input
                        type="checkbox"
                        id="form-newsletter"
                        name="newsletter"
                        checked={newsletterValue}
                        onChange={() => toggleNewsletterValue(!newsletterValue)}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>
            </form>
            <button
                type="submit"
            >
                Versturen
            </button>
        </div>
      </>
  );
}

export default App;
