import { realpath } from 'fs';
import React from 'react';

type Complex = { 
  real: number, 
  imaginary: number,
}

function magnitude (c: Complex): number {
  return Math.sqrt(c.real**2 + c.imaginary**2)
}

function add (a: Complex, b: Complex): Complex {
  return { 
    real: a.real + b.real, 
    imaginary: b.imaginary + a.imaginary,
  }
}

function multiply (a: Complex, b:Complex): Complex {
  return {
    real: - a.imaginary * b.imaginary + a.real * b.real,
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  }
}

class Mandel extends React.Component {
    constructor(props: {}) {
      super(props);
    }
    private myRef = React.createRef<HTMLCanvasElement>();
    componentDidMount() {
      const buffer = new Uint8ClampedArray(300 * 200 * 4)
      for (let y = 0; y < 200; y ++) {
        for (let x = 0; x < 300; x ++) {
          let c: Complex = {
            real: x / 300 * 3 - 2,
            imaginary: y / 200 * 2 - 1,
          }
          let h = c;
          for (let i = 0; i < 20; i ++) {
            h = add(multiply(h, h), c);
          }
          const offset = (y * 300 + x) * 4;
          if(magnitude(h) > 2) {
            buffer[offset + 0] = 147
            buffer[offset + 1] = 20
            buffer[offset + 2] = 60
            buffer[offset + 3] = 255
          } else {
            buffer[offset + 0] = 0
            buffer[offset + 1] = 120
            buffer[offset + 2] = 200
            buffer[offset + 3] = 255
          }
        }
      }

      const image = new ImageData(buffer, 300, 200)
      const canvasik = this.myRef?.current
      var ctx = canvasik?.getContext("2d");
      if (!ctx || !canvasik) { return }
      ctx.putImageData(image, 0, 0)

    }
    render() {
      return <canvas className='mandela' id="tutorial" width="300" height="200" ref={this.myRef} />;
    }
  }

export default Mandel;
