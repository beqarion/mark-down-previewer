import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

const initialState = `
  This is a paragraph
   
  **This is boloded text**
  
  # Heading
  ## Heading 2
  
  > Block Quotes!  

  - list item 1
  - list item 2
  - list item 3


  [Visit my website](https://beqarion.github.io/my-resume.github.io/)

  This is a inline \`<div></div>\`
  
  This is a block of code 
  
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)
`;

class App extends React.Component {
   constructor(){
     super();
     this.state = {
       text: initialState
     }
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event){
     this.setState({
       text: event.target.value
     })
   }
   render(){
     const markdown = marked(this.state.text, {breaks: true});
     return(
      <div>
        <h2 className="text-center m-4">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6 par">
            <h6 className="text-center">Enter your markdown here:</h6>
            <textarea className="form-control p-2" id="editor" value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className="col-6" >
            <h6 className="text-center">Enter your markdown here:</h6>
            <div className="preview rounded p-2" id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
          </div>
        </div>
      </div>
      
      
     );
   }
}

export default App;
