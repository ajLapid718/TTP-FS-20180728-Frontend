import React from 'react';

const PortfolioView = (props) => {
  return (
    <div>
      <h1>Personal Portfolio</h1>
      {props.personalPortfolio.stocks
      ? props.personalPortfolio.stocks.map(stock => (
          <div>
            <h4>{stock.tickerSymbol} - {stock.amountOfShares} Shares | {stock.pricePerShare}</h4>
          </div>))
      : null}
    </div>
  );
};

export default PortfolioView;
