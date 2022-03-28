import React from 'react';
import '../style.css';

export default function VideoList(props) {
  return (
    <>

      <div>
        <h4> {props.title} </h4>
        <div className="scroll">
          <div className="thumbnail">
            <img className="bigImg" src="https://placekitten.com/g/300/200" />
            <img className="bigImg" src="https://placekitten.com/g/500/400" />
            <img className="bigImg" src="https://placekitten.com/g/600/300" />
            <img className="bigImg" src="https://placekitten.com/g/600/200" />
            <img className="bigImg" src="https://placekitten.com/g/300/700" />
            <img className="bigImg" src="https://placekitten.com/g/300/200" />
            <img className="bigImg" src="https://placekitten.com/g/200/100" />
          </div>
        </div>
      </div>
    </>
  );
}
