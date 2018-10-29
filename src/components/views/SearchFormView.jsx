import React from 'react';
import { Link } from 'react-router-dom';

const SearchFormView = props => {
  const validTickerDisplay = (
    <h1>
      Selected Ticker: {props.searchInfo.selectedTicker}
      <br />
      Current Price Per Share: ${props.searchInfo.tickerPrice}
      <br />
      Total Price: ${props.searchInfo.total}
    </h1>
  );
  const invalidTickerDisplay = <h1>Please enter a valid ticker symbol!</h1>;
  const restrictionMessage = <h1>{props.searchInfo.restrictionMessage}</h1>;

  return (
    <div>
      <Link to='/transactions'>My Transaction History</Link>
      <br />
      <Link to='/portfolio'>My Personal Portfolio</Link>
    <div>
      {props.searchInfo.ticker.length &&
      typeof props.searchInfo.tickerPrice === 'number'
        ? validTickerDisplay
        : invalidTickerDisplay}

      {props.searchInfo.restrictionMessage ? restrictionMessage : null}

      <form onSubmit={props.handlePurchase}>
        <label>Ticker:</label>
        <input
          type="text"
          name="ticker"
          value={props.searchInfo.ticker}
          onChange={props.handleChange}
          required
        />
        <button onClick={props.handleSearch}>Search</button>
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={props.searchInfo.quantity}
          onChange={props.handleChange}
          required
        />
        <button onClick={props.handleCalculate}>Calculate</button>
        <label>Total:</label>
        <input
          type="text"
          name="total"
          value={props.searchInfo.total}
          onChange={props.handleChange}
          required
        />
        <button disabled={!props.isPositiveWholeNumber(Number(props.searchInfo.quantity))}>Purchase</button>
      </form>
      </div>
    </div>
  );
};

export default SearchFormView;
