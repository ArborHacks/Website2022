import axios from 'axios';
import React, { Component } from 'react';
import './AG.css';
class AG extends Component {
	  constructor(props){
		      super(props);
		      this.state = {
			            graderOutput: "",
			            selectedFile: null
			          };
		    }

	  onFileChange = event => {
		      this.setState({ selectedFile: event.target.files[0] });
		      console.log("file changed");
		      console.log(event.target.files[0]);
		    };
	  
	  onFileUpload = () => {
		      const formData = new FormData();

		      formData.append(
			     	"myfile",
			            this.state.selectedFile,
			            this.state.selectedFile.name
			          );

		      console.log(this.state.selectedFile);

		      /*fetch('arborhacks.org/api/upload', {
			            method: 'POST',
			            headers: {
					            'Content-Type': 'multipart/form-data'
					          },
			            body: formData
			          })
		        .then(response => response.json())
		        .then(data => {
				        this.setState({ graderOutput: data.text});
				      })
		        .catch(err => console.error(err));
			*/
		  	axios.post('/api/upload', formdata);
		    };

	fileData = () => {
		      if (this.state.selectedFile) { 
			                
			              return ( 
					                <div> 
					                  <h2>File Details:</h2> 
					                  <p>File Name: {this.state.selectedFile.name}</p> 
					                  <p>File Type: {this.state.selectedFile.type}</p> 
					                  <p> 
					                    Last Modified:{" "} 
					                    {this.state.selectedFile.lastModifiedDate.toDateString()} 
					                  </p> 
					                </div> 
					              ); 
			            } else { 
					            return ( 
							              <div> 
							                <br /> 
							                <h4>Choose before Pressing the Upload button</h4> 
							              </div> 
							            ); 
		  } 
	}

	  /*render = () => {
		      return(
			              <div>
			                <div>
			                <h1> AG LETS GOOOO </h1>
			                  <iframe name="dummyframe" style={{ display: "none"}}> </iframe>
			                  <form id='fileform' action="https://ec2-54-224-132-193.compute-1.amazonaws.com:3000/api/upload" method='POST' encType='multipart/form-data' target="dummyframe">
			                    <input type='file' name='foo' onChange={this.onFileChange}/>
			                  </form>
			                  <button onClick={this.onFileUpload}> Submit </button>
			                </div>
			                <div style={{float: "left"}}>
			                  <p>
			                    {this.state.graderOutput}
			                  </p>
			                </div>
			              </div>
			          );
		    }
		    */
   
	    render() { 
		          return ( 
				          <div> 
				              <h1> 
				                GeeksforGeeks 
				              </h1> 
				              <h3> 
				                File Upload using React! 
				              </h3> 
				              <div> 
				                  <input type="file" onChange={this.onFileChange} /> 
				                  <button onClick={this.onFileUpload}> 
				                    Upload! 
				                  </button> 
				              </div> 
				            {this.fileData()} 
				          </div> 
				        ); 
		        } 
}

export default AG;
