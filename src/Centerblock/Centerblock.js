import React from 'react';

const centerblock = () => {
  return (
    <div className="logo container-fluid">
      <div className="row outerbox">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center logoBlock">
          <br></br>
          <div className="innerbox">
            <img className="logoImg img-fluid text-center" src="logo.jpg" alter="Pickflix Logo"></img>
            <br></br>
            <br></br>
            <p className="tagline">Lights! Camera! Cha-Ching!</p>
            <p className="details">PickFlix is the new movie prediction game where</p>
            <p className="details">YOU are the MovieMaster</p>
            <br></br>
            <br></br>
          </div>
            <div className="callToAction" className="explain">Explain this to me</div>
            <div class="updates">Subscribe for Updates</div> 
            <div class="behindScenes">Behind the Scenes</div> 
          </div>
          </div>
          </div>
  );
}

export default centerblock;






