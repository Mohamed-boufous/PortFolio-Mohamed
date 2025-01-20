import React from 'react'
import Ballpit from '../Ballpit/Ballpit'
import SplashCursor from "../SplashCursor/SplashCursor";
const Contactme = () => {
  return (
    <div>
 <div style={{position: 'relative', overflow: 'hidden', minHeight: '550px', maxHeight: '500px', width: '100%'}}>
<Ballpit
  count={80}
  gravity={2}
  friction={1}
  wallBounce={1}
  followCursor={false}
/>
</div>

    </div>
   
  )
}

export default Contactme