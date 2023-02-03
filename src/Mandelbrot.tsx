import React from 'react';

type Complex = { 
  real: number, 
  imaginary: number,
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
          let h: Complex = {
            real: x / 300 * 3 - 2,
            imaginary: y / 200 * 2 - 1,
          }
        }
      }
    }
    render() {
      return <canvas className='starina' id="tutorial" width="300" height="200" ref={this.myRef} />;
    }
  }

export default Mandel;
