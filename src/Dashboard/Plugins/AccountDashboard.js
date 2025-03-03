import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import InDashboard from '../../component/invesmentProfile';
import { filterTransactionType } from '../util/FilterTransactionType';

const AccountDashboard = ({ account, transactions }) => {
  const depositLength = filterTransactionType(transactions, 'deposit')
  const withdrawalength = filterTransactionType(transactions, 'withdrawal')
  const [visible, setVisible] = useState(false);
  const total = (account.Account_Balance);
  const [deposit, setDeposit] = useState(0.0);
  const subCount = transactions.length;
  const [isActive, setIsActive] = useState(false);
  const handleVisibility = () => {
    setVisible(!visible)
  }


  return (
    <div className="InvesmentProfiles">

      <div className="wideProfile">
        <div className="groupTwo">
          <h2>Total Invesments</h2>
          {visible ? <VisibilityIcon onClick={handleVisibility} /> : <VisibilityOffIcon onClick={handleVisibility} />}
        </div>
        <h1>$ {visible ? total : '******'}</h1>
      </div>

      <InDashboard visible={visible} IsActive={isActive ? 'Active' : 'InActive'} DepositAmount={deposit} currentAmount={total} repeatSub={subCount} totalWithdrawal={withdrawalength} totalDeposit={depositLength} />


    </div>
  )
}

export default AccountDashboard;