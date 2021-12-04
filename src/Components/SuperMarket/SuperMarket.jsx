import React from 'react'
import '../../styles/super-market.css'

// Components & Data
import { products } from '../../data/market-data'

const SuperMarket = () => {
  console.log(products)
  return (
    <div className="super-market">
      <section>
        MarketNav
        DisplayProducts
      </section>

      Cart

    </div>
  )
}

export default SuperMarket