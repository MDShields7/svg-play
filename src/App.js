import React from 'react';
import SwatchSvg from './components/SwatchSvg'
import Swatch2 from './components/mawashi-copy.svg'
// import SwatchSvgMap from './components/SwatchSvg'
import SwatchSvgMap2 from './components/SwatchSvgMap2'
import SwatchSvgInState from './components/SwatchSvgInState'
// import SwatchSvgMapAttributes from './components/SwatchSvgMapAttributes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          SVG Play
      </header>
      <p>React component rendering Svg</p>
      <SwatchSvg color={ '#9E2A2B' }/><br/>
      <p>React component rendering Svg 2</p>
      <img src={Swatch2} alt='hi' /><br/>
      <p>React component rendering new way</p>
      <SwatchSvgMap2/><br/>
      {/* <p>React component rendering Svg mapped paths</p>
      <SwatchSvgMap /> */}
      <p>React component rendering Svg from state</p>
      <SwatchSvgInState />
      {/* <p>React component rendering Svg mapped path attributes</p>
      <SwatchSvgMapAttributes /> */}
    </div>
  );
}

export default App;
