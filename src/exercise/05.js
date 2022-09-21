// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({className='', style, ...otherProps}) => { //can split off a prop and provide it a default value
  return (
    <div
      className={`box ${className}`.trim()}
      //put spread last so that it is not overridden by default css
      style={{ fontStyle: 'italic', ...style}}
      {...otherProps} // this includes props.children
    >
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
