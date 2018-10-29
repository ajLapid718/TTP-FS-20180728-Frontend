import React from 'react';
import './styles/PortfolioView.css';

const PortfolioView = (props) => {
  return (
    <div>
      <h1>Personal Portfolio</h1>
      {props.personalPortfolio.stocks
      ? props.personalPortfolio.stocks.map(stock => {
          let performanceIndicator;
          let difference = stock.currentPrice - stock.pricePerShare;
          console.log(stock.currentPrice, stock.pricePerShare)
          if (difference < 0) performanceIndicator = "negative";
          if (difference === 0) performanceIndicator = "neutral";
          if (difference > 0) performanceIndicator = "positive";

          return <div>
            <h4> <span className={performanceIndicator}>{stock.tickerSymbol}</span> - {stock.amountOfShares} Shares | {stock.pricePerShare} | Current Value: <span className={performanceIndicator}>{stock.currentPrice * stock.amountOfShares}</span> </h4>
          </div>})
      : null}
    </div>
  );
};

export default PortfolioView;
