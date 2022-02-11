import React, {useState} from "react";


export default function FormText(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const toggleCase = () => {
        let newText = text.toUpperCase().split(' ').map(function(word) {
            return (word.charAt(0).toLowerCase() + word.slice(1));
        }).join(' ');
        setText(newText);
    }
    const alternatCase = () => {
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        setText(chars.join(""));
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const copyText = () => {
        let text = document.getElementById("myBox");

        /* Select the text field */
        text.select();
        text.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(text.value);
    }
    return (
        <React.Fragment>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
            <textarea
                className="form-control"
                id="myBox" onChange={handleOnChange}
                rows="8" value={text}/>
                    <br/>
                    <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
                    &nbsp;
                    <button onClick={handleDownClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
                    <button onClick={toggleCase} className="btn btn-primary mx-1">tOGGLE cASE</button>
                    <button onClick={alternatCase} className="btn btn-primary mx-1">AlTeRnAtE cAsE</button>
                    <button onClick={copyText} className="btn btn-primary mx-1">Copy Text</button>
                    <button onClick={handleSpaces} className="btn btn-primary mx-1">Handle Spaces</button>
                </div>
            </div>

            <div className="container my-2">
                <h1>Text Summary</h1>
                <p>You have {text.split(" ").length - 1} words and {text.length} characters in your text
                    and {text.split('.').length - 1} sentences</p>
                <p>{0.0083 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </React.Fragment>
    );
}

