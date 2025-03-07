import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const useFetchTransaction = () => {
  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    const fetchUserTransactions = async () => {
      try {
        const res = await fetch(
          "https://autominner-backend.onrender.com/api/user/account",
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${Cookies.get("access_token")}`,
            },
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error(
            `Failed to fetch user details. Status: ${res.status}`
          );
        }
        const data = await res.json();
        const obj = data.transactionHistory;
        // console.log(obj)
        setTransaction(obj);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUserTransactions();
  }, []);
  return { transactions };
};

export default useFetchTransaction;
