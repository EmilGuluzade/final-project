import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Basket = () => {
    const {basket}=useContext(MainContext)
  return (
    <>


        {
            basket.length<1?(<div class="holder mt-0">
	<div class="container">
		<div class="page404-bg" style={{"min-height": "1.8px"}}>
			<div class="page404-text">
				<div class="txt1"><img src="https://big-skins.com/frontend/foxic-html-demo/images/pages/tumbleweed.gif" alt=""/></div>
				<div class="txt2">Your shopping cart is empty!</div>
			</div>
		</div>
	</div>
</div>)    :""    }
    </>
  )
}

export default Basket
