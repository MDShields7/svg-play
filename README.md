

# Exploring SVG componenets in React

## How to render svgs in React

### Import the SVG file into React component
svg-file.js
```
<svg>
    <g>
        <path d='...' fill='...'/>
    </g>
</svg>
```

Parent.js // Component displaying svg
```
import mySvg from './images/svg-file.svg

export default class Parent extends Component{
    constructor(){
        this.state = {}
    }
    render (){
        return (
            <img src={mySvg}>
        )
    }
}
```

### A React Component -place SVG text inside of JSX
mySVG.js
```
export default class Svg extends Component{
    constructor(){
        this.state = {}
    }
    render (){
        return (
            <svg>
                <g>
                    <path d='...' fill='...'/>
                </g>
            </svg>
        )
    }
}
```


### Using JSX to place variables - WORKS
```
export default class Svg extends Component{
    constructor(){
        this.state = {
            myColor1: '#9E2A2B'
            myColor2: '#d45b54'
            myColor3: '#ff8b81'
        }
    }
    render (){
        return (
            <svg>
                <g>
                    <path d='...' fill={myColor1}/>
                    <path d='...' fill={myColor2}/>
                    <path d='...' fill={myColor3}/>
                </g>
            </svg>
        )
    }
}
```

### Keeping entire SVG in state, and rendering from single variable - WORKS
```
export default class Svg extends Component{
    constructor(){
        this.state = {
            svg: <svg>
                <g>
                    <path d='...' fill='...'/>
                    <path d='...' fill='...'/>
                    <path d='...' fill='...'/>
                </g>
            </svg>
        }
    }
    render (){
        return (
        <>
            {svg}
        </>
        )
    }
}
```

### Keeping paths in array, and mapping over array in svg - DOES NOT WORK
```
export default class Svg extends Component{
    constructor(){
        this.state = {
            pathArr: [
                <path d='...' fill='...'/>,
                <path d='...' fill='...'/>,
                <path d='...' fill='...'/>
            ]
        }
    }
    render (){
        return (
        <svg>
            <g>
                {pathArr.map(elem => elem)}
            </g>
        </svg>
        )
    }
}
```

### Keeping paths in array, and placing w/ brakcet notation in svg - DOES NOT WORK
```
export default class Svg extends Component{
    constructor(){
        this.state = {
            pathArr: [
                <path d='...' fill='...'/>,
                <path d='...' fill='...'/>,
                <path d='...' fill='...'/>
            ]
        }
    }
    render (){
        return (
        <svg>
            <g>
                {pathArr[0]}
                {pathArr[1]}
                {pathArr[2]}
            </g>
        </svg>
        )
    }
}
```