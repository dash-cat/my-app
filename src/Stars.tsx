import React from 'react';
import { setTextRange } from 'typescript';
import './Stars.css'

// function Stars() {
//   return (
//     <canvas id="tutorial" width="150" height="150"></canvas>

//   );
// }  

type Star = {
  fillStyle: string;
  rect: [number, number, number, number]
};

class Stars extends React.Component {
    constructor(props: {}) {
      super(props);
    }
    private myRef = React.createRef<HTMLCanvasElement>();
    componentDidMount() {
      const self = this;
      const stars: Star[] = []
      function rand () { return Math.random() * 10000}
      let timer = performance.now()
      function animation () {
        const canvasik = self.myRef?.current
        var ctx = canvasik?.getContext("2d");
        if (!ctx || !canvasik) { return }
        timer = performance.now()
        ctx.resetTransform()
        ctx.rotate(timer)
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect (0, 0, canvasik.width, canvasik.height);
        for (let star of stars) {
          ctx.fillStyle = star.fillStyle
          ctx.fillRect (...star.rect)
          
        }
        requestAnimationFrame(animation)
      }
      animation()
      for (let i = 0; i < 100; i ++) {
        stars.push(
          {fillStyle : "rgba(255, 255, 255, 1)", rect: [rand(), rand(), rand() / 100, rand() / 100]},
          {fillStyle: "rgba(255, 255, 255, 1)", rect :[rand(), rand(), 25, 16]}
        )
      }
    }
    render() {
      return <canvas className='starina' id="tutorial" width="10000" height="10000" ref={this.myRef} />;
    }
  }

export default Stars;
