import React from 'react';
import { Link } from 'react-router-dom';

const TransactionsView = props => {
  return (
    <div>
      <Link to="/portfolio">My Personal Portfolio</Link>
      <br />
      <Link to="/search">Search</Link>
      <div>
        <h1>Transaction History</h1>
        {props.userTransactions.map(transaction => (
          <div key={transaction.id}>
            <h4>
              {transaction.requestType} ({transaction.tickerSymbol}) -{' '}
              {transaction.amountOfShares} Shares @ {transaction.pricePerShare}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsView;
