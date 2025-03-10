import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useFetchAccount = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  const getUser = async () => {
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
        const errorText = await res.text(); // Read raw response (JSON or HTML)
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      setAccount(data);
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
      setError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    getUser();
  }, []); // ✅ Runs once on mount

  return { account, error };
};

export default useFetchAccount;
