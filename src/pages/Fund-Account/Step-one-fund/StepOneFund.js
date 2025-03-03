

const FundAccount = () => {

const countries = [];
const FetchCountries = async () => {
    try {
              const res = await fetch('http://localhost:5427/api/user/account', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
      
              if (!res.ok) {
                throw new Error(`Failed to fetch user details. Status: ${res.status}`);
              }
              const data = await res.json();
    
            } catch (e) {
              console.error(e);
            }

}
    return(
  <div className="FundAccount_Container"> 
      <div className="fundPart"> 
      <div> 
      <h3>Let’s Get You Set Up for your Investment ....</h3>
      <p>Kindly fill in the fields below to fund your account for your investment</p>
      </div>
        <div className="middleFormContent"> 
        <form className="FundForm"> 
         <label htmlFor=""> Referral Code</label>
         <input 
         type="text"
         placeholder=""
         name=""
         />
         <label htmlFor="">Wallet Address</label>
         <input 
         type="text"
         placeholder=""
         name=""
         />
         <label htmlFor="">Country</label>
         <select name="" >
            {

            }
         </select>
         <label htmlFor="">Coin Type</label>  
         <label htmlFor="">Amount</label>
        </form>
        </div>
      </div>
      <div className="PlanDetails">

      </div>
  </div>
    )

}

export default FundAccount;