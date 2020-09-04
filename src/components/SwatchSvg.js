import React, { Component } from 'react'
import chroma from 'chroma-js'

export default class SwatchSvg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: null,
      color2: null
    }
  }
  componentDidMount() {
    const { color } = this.props;
    let color1;
    let color2;
    let color3;
    if (color) {
      color1 = color;
      color2 = chroma(color1).brighten(1)
      color3 = chroma(color1).brighten(2)
      this.setState({
        color1: color1,
        color2: color2,
        color3: color3
      })
    }
  }
  render() {
    const { color1, color2, color3 } = this.state
    return (<>
      {color1 && color2 ?
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="150" viewBox="0 0 100 25">
            <path id="Exclusion_2" data-name="Exclusion 2" d="M15.587,25H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H44.895A92.868,92.868,0,0,1,31.922,13.632,86.129,86.129,0,0,1,15.587,25ZM97,25H71.806A186.39,186.39,0,0,1,86.45,8.552,37.512,37.512,0,0,1,92.707,3.58,10.7,10.7,0,0,1,98.115,1.76c.51,0,1.052,0,1.612-.01A2.963,2.963,0,0,1,100,3V22A3,3,0,0,1,97,25ZM47.873,25H23.456c4.517-2.911,10.722-7.35,17.469-12.5C46.879,7.955,52.7,3.282,56.482,0h20.93C72.151,2.861,66.745,6.381,61.021,10.107,52.782,15.47,44.263,21.016,35.494,25H47.873Z"fill={color1} />
            <path id="Intersection_5" data-name="Intersection 5" d="M 15.582,25 C 26.655,19.269 38.299,8.748 44.889,0 H 56.482 A 371.791,371.791 0 0 1 23.456,25 Z"fill={color3} />
            <path id="Intersection_6" data-name="Intersection 6" d="M 35.495,25.001 C 50.309,18.27 64.528,7.006 77.417,0.001 h 19.584 a 3,3 0 0 1 2.728,1.75 Q 98.955,1.76 98.116,1.76 c -6.6,0 -15.739,10.366 -26.31,23.24 z" fill={color2} />
        </svg>
        : <div></div>} </>
    )
  }
}
