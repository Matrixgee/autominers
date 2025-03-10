import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useFetchTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserTransactions = async () => {
      const token = Cookies.get("access_token");

      if (!token) {
        setError("No access token found.");
        return;
      }

      try {
        const res = await fetch(
          "https://autominner-backend.onrender.com/api/user/account",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`HTTP ${res.status}: ${errorText}`);
        }

        const data = await res.json();
        setTransactions(data.transactions || []); // Ensure transactions exist
      } catch (error) {
        console.error("Fetch error:", error.message);
        setError(error.message || "An error occurred");
      }
    };

    fetchUserTransactions();
  }, []);

  return { transactions, error };
};

export default useFetchTransaction;
