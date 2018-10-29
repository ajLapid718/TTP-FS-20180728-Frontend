import React from 'react';

const TransactionsView = (props) => {
  return (
    <div>
      <h1>Transaction History</h1>
      {props.userTransactions.map(transaction => (
        <div key={transaction.id}>
          <h4>{transaction.requestType}  ({transaction.tickerSymbol}) - {transaction.amountOfShares} Shares @ {transaction.pricePerShare}</h4>
        </div>
      ))}
    </div>
  );
};

export default TransactionsView;
