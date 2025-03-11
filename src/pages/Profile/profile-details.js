import "./profile-details.css";
import angleIcon from "../../assets/icons/angle-icon.png";
import settingsIcon from "../../assets/icons/settings-icon.png";
// import memoji from "../../assets/memoji.png";
import { Link } from "react-router-dom";
import ImagePreview from "../../component/Image-Preview/image-preview";

const ProfileDetails = ({ user }) => {
  console.log(user);

  const firstName = user?.user?.first_name || "";
  const lastName = user?.user?.Last_name || "";
  const email = user?.user?.Email || "";

  return (
    <div className="profile-container">
      <div>
        <div className="profile-image-container">
          <ImagePreview />
          {/* <img src={memoji} alt="profile-image" className="profile-image" /> */}
        </div>
        <div className="header">
          <h4>{`${firstName} ${lastName}`}</h4>
          <p>{email}</p>
        </div>
      </div>

      <h2>PROFILE</h2>
      <div className="profile-data">
        <div>
          <Link to="/account/profile/edit-information" className="links">
            <p>Edit Profile Information</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
        <div>
          <Link to="/account/profile/notification" className="links">
            <p>Notification</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
        <div>
          <Link to="/account/profile/language" className="links">
            <p>Language</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
        <div>
          <Link to="/account/profile/referral" className="links">
            <p>Refferal Code</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
      </div>

      <h2>Security</h2>
      <div className="security">
        <div>
          <Link to="/account/profile/change-password" className="links">
            <p>Change Password</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
        <div>
          <Link to="/" className="links">
            <p>Theme</p>
            <img src={settingsIcon} alt="settings-icon" />
          </Link>
        </div>
      </div>

      <h2>About Autominer</h2>
      <div className="about-autominer">
        <div>
          <Link to="/account/profile/contact-us" className="links">
            <p>Contact Us</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
        <div>
          <Link to="/privacy-policy" className="links">
            <p>Privacy Policy</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
        <div>
          <Link to="/terms-and-conditions" className="links">
            <p>Terms of Use</p>
            <img src={angleIcon} alt="angle-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
