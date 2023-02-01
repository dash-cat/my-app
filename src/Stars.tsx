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
        if (!ctx) { return }
        ctx.fillStyle = "rgb(0,0,0)";
        if (!canvasik) { return }
        ctx.fillRect (0, 0, canvasik.width, canvasik.height);

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect (30, 30, 2, 1);

        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect (15, 70, 3, 1);
    }
    render() {
      return <canvas id="tutorial" width="150" height="150" ref={this.myRef} />;
    }
  }

export default Stars;
