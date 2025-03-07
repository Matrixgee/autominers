import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
const useFetchAccount = () => {
  const [account, setAccount] = useState([])


  

  useEffect(() => {
    const fetchUserAccount = async () => {
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
          throw new Error(`Failed to fetch user details. Status: ${res.status}`);
        }
        const data = await res.json();
        const obj = data.userAccount;
        // console.log(obj)
        setAccount(obj);
      } catch (e) {
        console.error(e);
      }
    }

    fetchUserAccount()
  }, []);
  return { account };
}

export default useFetchAccount;