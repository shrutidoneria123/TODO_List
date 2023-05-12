//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
// challange 2--//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
// 1-implement th add note functionlity
// create a const that keep a track title and content
//pass the new note back tothe app
//add new node to array
//take array and render separate Note components for each items
//2-implement the delete note functionality
//callback from the note component to trigger a delete a function
//use the filter function to filter out the item