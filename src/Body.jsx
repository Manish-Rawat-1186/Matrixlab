import React from 'react'
import './body.css'

const Body = () => {
  return (
    <div>
        <div className='secondary_header'>
          <h1>The Kuppy System</h1>
          <p>The Kuppy Clans Ecosystem consists of our two Native Tokens- Canine Master and Feline Master</p>
        </div>
        <div className='back'></div>
        <div className='secondary_body' >
        <div className='left_one'>
            <img src='images/dog.svg' alt='dog' />

            <button>Buy Now</button>
            <button>Cart</button>
            <button>Contract</button>
            <div>
          <h2>TOKENOMICS</h2>
        <div className='tokenomics'>
          <div>
          <img src='images/chest.png' alt='chest' />
          <p>10% TEAM LOCK</p>
          </div>
          <div>
          <img src='images/chest.png' alt='chest' />
          <p>20% STACKING REWARDS</p>
          </div>
          <div>
          <img src='images/chest.png' alt='chest' />
          <p>30% LIQUIDIY</p>
          </div>
          <div>
          <img src='images/chest.png' alt='chest' />
          <p>40% FAIR LAUNCH</p>
          </div>
          </div>
          <h1>TAX</h1>
          <div className='tax' >
            <div>
              <h3>3% BUY TEX</h3>
              <p>
              2% Reserve 
              <br></br>
              1% Burn
              </p>
            </div>
            <div className='x'></div>
            <div>
              <h3>
                7% Sell Tax
              </h3>
              <p>
                6% Marketing 
                <br></br>
                1% Burn
              </p>
             
            </div>
          </div>
          
          </div>
        </div>

         
          <div className='right_one'>
            <img className = 'cat' src='images/cat.svg' alt='cat' />
            <div >
              <img src='images/image.svg' alt='' />
              <p>
              This is a strict Whitelist Presale Allocations for the Kuppy Clans Community, to whitelist for this Pre-Sale, we encourage you to stake 100,000 Canine Master $CM for 90 days. 10% of raised BUSDs would be used to Buy Back $CM.
              </p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Body;