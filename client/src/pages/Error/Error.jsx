import React from 'react'
import "./Error.scss"
import { Link } from 'react-router-dom'
const Error = () => {
  return (
   <div className="errorWrapper">
     <div className="holder mt-0 mb-4 mb-lg-10 ">
    <div className="container">
      <div className="page404-bg">
        <div className="page404-text">
          <div style={{display:"flex",alignItems:"center"}} className="txt1">4 <img style={{width:"230px",transform:"rotate(-30deg)"}} src="https://cdn4.iconfinder.com/data/icons/normcore/99/Old_Jumper-512.png" alt="" /> 4</div>
          <div className="txt2">Page not found!</div>
        </div>
        <svg id="morphing" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
          <g transform="translate(50,50)">
            <path className="p" d="M96.30924825296616 1.6552970074721292C128.48908779543004 0.06463380831769228 161.1319194596444 5.889937876344589 181.5177002541026 30.954599018685357C202.06597806881584 56.22028713154355 201.956667144489 89.64568518179826 193.30822550296702 120.97504178963204C185.49858279910552 149.8127441615953 165.0661054823699 172.67314860418784 138.3564200397501 186.1080295693183C110.88813053418829 200.06496823109532 78.68503574365303 206.46290275843214 50.92651440636283 193.01283720404322C22.948779981860266 179.4879335782106 7.878269068016286 150.83175080547886 1.977991759764291 120.36710404037987C-3.6954272301258158 91.61905466139821 2.890849922706222 61.91167536809358 21.14902773780062 38.93413605180539C39.45038935063335 15.901744125846228 67.00877864636465 2.851943923425958 96.30924825296616 1.6552970074721292Z"></path>
          </g>
        </svg>
      </div>
      <div className="page404-info text-center">
        <Link href="/" className="btn">Go Back</Link>
      </div>
    </div>
  </div>
   </div>
  )
}

export default Error
