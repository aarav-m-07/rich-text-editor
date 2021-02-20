import React from "react"; 
import './App.css';

class textEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bold: false,
    };
  }

  changeDisplay = (displayOption) => {

    const textAreaValue = document.getElementById("textareaValue").value;

    if(textAreaValue.length > 0){

      switch(displayOption){
        case "Bold":
          document.getElementById("textareaValue").style.fontWeight = "bold"
          break;
        case "Italic":
          document.getElementById("textareaValue").style.fontStyle = "italic"
          break;
        case "Underline":
          break;
        case "List":
          break;
      }

    }
  }

  getTextAreaClass = () => {

    //let { bold } = this.state;

    

    return "textarea"


  }


  render() {
    return(
      <React.Fragment>
        <div style={{padding: "100px 100px 0px"}}>
          <button className="margin-Right" onClick={() => this.changeDisplay("Bold")}>Bold</button>
          <button className="margin-Right" onClick={() => this.changeDisplay("Italic")}>Italic</button>
          <button className="margin-Right" onClick={() => this.changeDisplay("Underline")}>Underline</button>
          <input className="margin-Right" placeholder = "Font size(px)" />
          <input className="margin-Right" placeholder = "Color Hex Code" />
          <button onClick={() => this.changeDisplay("List")}>List</button>
        </div>
        <div style={{padding: "20px 100px 0px"}}>
        <textarea id="textareaValue" className={this.getTextAreaClass} rows="15" cols="70" placeholder="Editor"></textarea>
        </div>
    </React.Fragment>
    )
  }
}

export default textEditor;
