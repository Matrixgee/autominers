
import Cookies from 'js-cookie'

const fetchUserDetail = async (cb) => {
 try {
   const res = await fetch('http://localhost:5427/api/user/account', {
     headers: {
       'Content-type': 'application/json',
       Authorization: `Bearer ${Cookies.get('access_token')}`,
     },
     credentials: 'include'
   });

   if (!res.ok) {
     throw new Error(`Failed to fetch user details. Status: ${res.status}`);
   }

   const data = await res.json();
   console.log(data)
   cb(data);
 } catch (e) {
   console.error(e);
 }
};

export default fetchUserDetail;