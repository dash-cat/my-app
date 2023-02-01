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
        ctx.fillStyle = "rgb(70,130,20, .5)";
        ctx.fillRect (10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 90, 20, 0.5)";
        ctx.fillRect (30, 30, 50, 50);

        ctx.fillStyle = "rgba(20, 90, 100, 0.5)";
        ctx.fillRect (15, 70, 90, 90);
    }
    render() {
      return <canvas id="tutorial" width="150" height="150" ref={this.myRef} />;
    }
  }

export default Stars;
