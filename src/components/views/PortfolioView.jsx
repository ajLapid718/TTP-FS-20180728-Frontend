import React from 'react';

const PortfolioView = (props) => {
  return (
    <div>
      <h1>Personal Portfolio</h1>
      {props.personalPortfolio
      ? props.personalPortfolio.map(stock => (
          <div>
            <h4>{stock.tickerSymbol} - {stock.amountOfShares} Shares | {stock.pricePerShare} | Current Price: {stock.currentPrice} </h4>
          </div>))
      : null}
    </div>
  );
};

export default PortfolioView;
