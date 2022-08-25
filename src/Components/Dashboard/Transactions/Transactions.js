import React, { useState, useEffect } from "react";
import axios from "axios";

import "../Transactions/Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://finall-app.herokuapp.com/api/v1/users/62adf34ffd4713384367abda/accounts/62f8313e26f57f70a2e9829e/transactions?page=${page}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="transactions-container">
      <div className="transactions">
        <div className="transactions-header">
          <h2>Transaction history</h2>
          <div className="transactions-btn-container">
            <button
              onClick={() => {
                if (transactions?.paging?.previous !== null) {
                  setPage((prevPage) => prevPage - 1);
                }
              }}
            >
              Prev
            </button>
            <button>{page}</button>
            <button
              onClick={() => {
                if (transactions?.paging?.next !== null) {
                  setPage((prevPage) => prevPage + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="transaction-table">
            <thead className="tbrow">
              <tr>
                <th className="tbhead">Narration</th>
                <th className="tbhead">Type</th>
                <th className="tbhead">Date</th>
                <th className="tbhead">Amount</th>
              </tr>
            </thead>

            <tbody>
              {transactions &&
                transactions?.data?.map((transaction) => (
                  <tr
                    className="tbrow"
                    key={transaction.narration + Math.random()}
                  >
                    <td className="tbdata">{transaction.narration}</td>
                    <td className="tbdata">{transaction.type}</td>
                    <td className="tbdata">{formatDate(transaction.date)}</td>
                    <td className="tbdata">${transaction.amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
