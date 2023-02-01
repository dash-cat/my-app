import React from 'react';
import logo from './logo.svg';
import './App.css';

// function Stars() {
//   return (
//     <canvas id="tutorial" width="150" height="150"></canvas>

//   );
// }  
class Stars extends React.Component {
    constructor(props: {}) {
      super(props);
    }
    private myRef = React.createRef<HTMLCanvasElement>();
    componentDidMount() {
      const canvasik = this.myRef?.current
      var ctx = canvasik?.getContext("2d");
      function rand () { return Math.random() * 100}
        if (!ctx) { return }
        ctx.fillStyle = "rgb(0,0,0)";
        if (!canvasik) { return }
        ctx.fillRect (0, 0, canvasik.width, canvasik.height);
        for (let i = 0; i < 100; i ++) {
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect (rand(), rand(), 2, 1);

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect (rand(), rand(), 3, 1);
        }
        
    }
    render() {
      return <canvas id="tutorial" width="150" height="150" ref={this.myRef} />;
    }
  }

export default Stars;
