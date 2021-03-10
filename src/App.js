import React, { Component } from 'react';

class App extends Component {

  // handleFiles = (event) => {
  //     let files = event.target.files;
  //     console.log(files[0])
  //     // $("#src").attr("src", URL.createObjectURL(files[0]));
  //     document.querySelector('source').src = URL.createObjectURL(files[0])
  //     document.getElementById("audio").load();
  // }

  render() {
    return(
    <div >
      hello world
    </div>
    )};
}

export default App;

{/* <input onChange={this.handleFiles} type="file" id="upload" />
      <audio id="audio" controls>
        <source src="" id="src" />
      </audio> */}