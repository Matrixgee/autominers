import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useFetchHook = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const res = await fetch('http://localhost:5427/api/user/account', {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${Cookies.get('access_token')}`,
          },
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch user details. Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data.user)
        setUser(data.user);
      } catch (e) {
        console.error(e);
      }
    };

    fetchUserDetail();
  }, []);

  return { user };
};

export default useFetchHook;
