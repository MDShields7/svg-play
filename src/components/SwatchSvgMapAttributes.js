import React, { Component } from 'react'
import chroma from 'chroma-js'

export default class SwatchSvgMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: null,
      color2: null,
      svgArr: [
        { "id":"Exclusion_2", 
        "data-name":"Exclusion 2",
        "d":"M15.587,25H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H44.895A92.868,92.868,0,0,1,31.922,13.632,86.129,86.129,0,0,1,15.587,25ZM97,25H71.806A186.39,186.39,0,0,1,86.45,8.552,37.512,37.512,0,0,1,92.707,3.58,10.7,10.7,0,0,1,98.115,1.76c.51,0,1.052,0,1.612-.01A2.963,2.963,0,0,1,100,3V22A3,3,0,0,1,97,25ZM47.873,25H23.456c4.517-2.911,10.722-7.35,17.469-12.5C46.879,7.955,52.7,3.282,56.482,0h20.93C72.151,2.861,66.745,6.381,61.021,10.107,52.782,15.47,44.263,21.016,35.494,25H47.873Z",
        "transform":"translate(206 325)" },
        { "id":"Intersection_5",
        "data-name":"Intersection 5",
        "d":"M18.1,35.5c11.073-5.731,22.717-16.252,29.307-25H59a371.791,371.791,0,0,1-33.026,25Z",
        "transform":"translate(203.483 314.504)" },
        { "id":"Intersection_6",
        "data-name":"Intersection 6",
        "d":"M48.213,31.28c14.814-6.731,29.033-17.995,41.922-25h19.584a3,3,0,0,1,2.728,1.75q-.774.009-1.613.009c-6.6,0-15.739,10.366-26.31,23.24Z",
        "transform":"translate(193.281 318.72)" } 
      ]
    }
  }
  componentDidMount() {
    // console.log('svgArr',this.state.svgArr)
    // const { color } = this.props;
    // let color1;
    // let color2;
    // let color3;
    // if (color) {
    //   color1 = color;
    //   color2 = chroma(color1).brighten(1)
    //   color3 = chroma(color1).brighten(2)
    //   this.setState({
    //     color1: color1,
    //     color2: color2,
    //     color3: color3
    //   })
    // }
  }
  // makePath( path ){
  //   for ( let i = 0; i < path.length; i++){

  //   }
  // }
  render() {
    const { color1, color2, color3,  svgArr } = this.state
    // console.log('Map Attributes svgArr',svgArr)
    return (
        // <svg xmlns="http://www.w3.org/2000/svg" width="600" height="150" viewBox="0 0 100 25">
        //   <g id="Group_1" data-name="Group 1" transform="translate(-206 -325)">
        //     {/* {svgArr.map(elem => 
        //       `<path 'id'=${elem[id]} 'data-name'=${elem[data-name]} 'd'=${elem[d]} 'transform'=${elem[transform]} />`
        //       )} */}
        //     {/* {svgArrBasic[0]}
        //     {svgArrBasic[1]}
        //     {svgArrBasic[2]} */}
        //   </g>
        // </svg>
        'hi'
    )
  }
}
