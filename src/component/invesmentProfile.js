import React from "react";
import CachedIcon from '@mui/icons-material/Cached';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';




const InDashboard = (prop) => {

    return (
        <div className="manyProfile">

            <div className="ProfileStatus">
                <div className="groupTwo">
                    <h3>Account Status</h3>
                    <h3 className="groupActive">{prop.IsActive}</h3>
                </div>
            </div>

            <div className="groupSectionCnt">


                <div className="widegroup">
                    <div className="groupTwo">
                        <h4>Total Deposit</h4>
                        <CallReceivedIcon />
                    </div>
                    <h2>{prop.visible ? prop.totalDeposit : '****'}</h2>
                </div>

                <div className="narrowgroup">
                    <div className="groupTwo">
                        <h4>Current Balance</h4>
                        <PlayArrowOutlinedIcon />
                    </div>
                    <h2>{prop.visible ? prop.currentAmount : '****'}</h2>
                </div>

                <div className="narrowgroup">
                    <div className="groupTwo">
                        <h4>Repeat Sub</h4>
                        <CachedIcon />
                    </div>
                    <h2>{prop.repeatSub}</h2>
                </div>

                <div className="widegroup">
                    <div className="groupTwo">
                        <h4>Total Withdrawal</h4>
                        <NorthEastIcon />
                    </div>
                    <h2>{prop.visible ? prop.totalWithdrawal : '****'}</h2>
                </div>



            </div>
        </div>
    );


}

export default InDashboard;