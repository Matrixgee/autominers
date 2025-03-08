import React from "react";
import "./home-page.css";
import account from "../../assets/account.png";
import pick from "../../assets/pick.png";
import mine from "../../assets/mine.png";
import reward from "../../assets/reward.png";
import video from "../../assets/video.png";
import dollarIcon from "../../assets/icons/fi-rr-dollar.png";
import bulbIcon from "../../assets/icons/fi-rr-bulb.png";
import lockIcon from "../../assets/icons/fi-rr-lock.png";
import worldIcon from "../../assets/icons/fi-rr-world.png";
import UKFlag from "../../assets/united-kingdom.png";
import reviewImg from "../../assets/review-image.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/Footer/footer";
import Investor from "../../component/Investor/investor";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  // const history = useHistory();

  useEffect(() => {
    const fetchData = (async) => {
      try {
      } catch (err) {}
    };
  });

  const cryptoOptions = [
    "Bitcoin",
    "Ethereum",
    "Solana",
    "Cardano",
    "Ripple",
    "Litecoin",
  ];
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Hannah",
  ];
  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomReward = () => (Math.random() * 2).toFixed(2); // Random reward between 0 and 2

  const generateInvestorData = () => {
    return [
      { name: "Name", crypto: "Crypto Investment", reward: "Reward" }, // Header
      ...Array.from({ length: 5 }, () => ({
        name: getRandom(names),
        crypto: getRandom(cryptoOptions),
        reward: getRandomReward(),
      })),
    ];
  };

  const investorData = generateInvestorData();

  return (
    <div>
      <Navigation />
      <div className="hero-section">
        <div className="text-div">
          <h1 className="hero-section-headertext">
            Cryptocurrency is Easy, we will help you take care of it!
          </h1>
          <p>
            Leave the Complexity to Us and Enjoy Hassle-Free Cryptocurrency
            Management!
          </p>
          <Link to="/plan-account-creation" className="hero-section-btn">
            GET STARTED
          </Link>
        </div>
      </div>
      <div className="investor">
        {investorData.map(({ name, crypto, reward }) => (
          <Investor name={name} crypto={crypto} reward={reward} />
        ))}
      </div>

      <div className="join-autominer">
        <h2 className="join-us-headertext">Want to join us at Autominer?</h2>
        <p className="join-us-subtext">
          We simplify your whole mining process in four easy steps without
          complications.
        </p>
        <div className="join-us-subsection">
          <div className="subsection-container">
            <img src={account} alt="illustration" />
            <div className="subsection-text-container">
              <h3>Create an Account</h3>
              <p>
                Simply Sign up by providing your full name and preferred
                username to register and start earning bitcoin every day. It's
                that simple!
              </p>
            </div>
          </div>

          <div className="subsection-container">
            <div className="subsection-text-container">
              <h3>Choose a Mining Plan</h3>
              <p>
                Choose your preferred mining plan with no membership rates. What
                is keeping you waiting? Let us get you started to the
                cryptocurrency mining world!
              </p>
              <Link to="/Plan" className="view-plans-btn">
                View Plans
              </Link>
            </div>
            <img src={pick} alt="illustration" />
          </div>

          <div className="subsection-container">
            <img src={mine} alt="illustration" />
            <div className="subsection-text-container">
              <h3>Let us Mine Crypto for you</h3>
              <p>
                Autominer will mine your cryptocurrency for you with our
                improved mining hardware at a global competitive rate , ensuring
                that you receive your 100% mining rewards without hassle!
              </p>
            </div>
          </div>

          <div className="subsection-container">
            <div className="subsection-text-container">
              <h3>Earn Crypto Automatically Build your Future!</h3>
              <p>
                We distribute mining rewards as well as referral rewards
                automatically into your wallet address. Check your mining
                potential based on your mining plan!
              </p>
            </div>
            <img src={reward} alt="illustration" />
          </div>
        </div>
      </div>

      <div className="at-autominer">
        <div className="at-autominer-text-container">
          <h1 className="at-autominer-headertext">At Autominer</h1>
          <p>
            We are passionate about the world of cryptocurrencies particularly
            Bitcoin. we offer unique opportunity to capitalize on the incredible
            potential of Bitcoin mining!
          </p>
          <p>
            A place for everyone who wants to mine Bitcoin. Deposit funds
            through your wallet address /crypto exchange. Instant withdrawal of
            bitcoins to your registered wallet is guaranteed. Nothing extra.
          </p>
          <p>
            Join our poll of over 700,000 users from all over the world
            satisfied with our services. Together, we will navigate the exciting
            world of cryptocurrencies and secure your dream future!
          </p>
          <Link to="/about-us" className="learn-more-btn">
            Learn More
          </Link>
        </div>
        <img src={video} alt="video" />
      </div>

      <div className="why-join-us">
        <p className="section-headertext">Why Choose Us?</p>
        <div className="join-us-subcontainer">
          <div className="strong-security">
            <img src={lockIcon} alt="lock icon" />
            <h4>Strong Security</h4>
            <p>Secure you against DDoS attacks, full data encryption</p>
          </div>

          <div className="coverage">
            <img src={worldIcon} alt="world icon" />
            <h4>World Coverage</h4>
            <p>Available in 99% of countries around the globe</p>
          </div>

          <div className="efficient">
            <img src={dollarIcon} alt="dollar icon" />
            <h4> Cost Efficient</h4>
            <p>
              Reliable mining plans with a cloud infrastructure with zero
              downtime
            </p>
          </div>

          <div className="high-efficiency">
            <img src={bulbIcon} alt="bulb icon" />
            <h4>High Efficiency</h4>
            <p>
              Fast and reliable cloud system for mining cryptocurrency with
              automatic payouts
            </p>
          </div>
        </div>
      </div>

      <div className="reviews">
        <h4>Hear from our satisfied Investors</h4>
        <div className="reviews-content">
          <div className="reviews-content-text">
            <p>
              Investing with autominer has been a decision I have never
              regretted. The return rate is very satisfying, I can sleep with my
              two eye closed knowing that my investment is safe and secure from
              swinders.
            </p>
            <span className="review-name">
              <img
                src={UKFlag}
                alt="United kingdom flag"
                style={{ display: "inline" }}
              />
              <p>Miss Edggy the investor</p>
            </span>
          </div>
          <img src={reviewImg} alt="review" />
        </div>
      </div>

      {/* USed MUI for FAQ */}
      <div className="middle-container">
        <div className="FAQ">
          <h4>Some Frequently Asked Questions</h4>
          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
              padding: ".5rem 0",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                How can I join autominer mining community? Please Guide Me!
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                interested users can join our mining system by getting
                registered on our platform with their valid information or
                getting registered through one of our referrals on the social
                medias ,be assured our system has 100% uptime with zero chance
                for a transaction to fail. Our webiste is CDN powered, SSL
                secured and protected against DDoS attacks to make sure that
                your activity on our website is completely safe.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                I'm from France , can I also do bitcoin mining with your
                platform ?
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                We made our data center more convenient to enable different
                users use our platform ,all investors can mine bitcoin with us
                irrespective of their country
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                Can I get my total capital back eventually, if I'm no longer
                interested?
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                Yes with a onetime click from your dashboard, you can get back
                your capital with no delay.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                When will my mining start after deposit?
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                Usually it takes 3 confirmation from the blockchain, once your
                deposit is confirm via blockchain, our system will send you mail
                regarding confirmation and your mining begins immediately.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                {" "}
                Do you charge any fees for your services? 
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                No, autominer System is free for all investors
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                How do I know it is time for my payout?
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                Usually our platform process payout automatically , in another
                case investors can set up their payout manually, if you already
                setup your payout manually kindly keep reviewing your dashboard
                for a notification that indicates your payout is ready.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                Can I make more than one deposit on Autominer system in 24
                Hours?
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                Yes you can make unlimited deposit on our system, you can also
                use same address to make multiple deposit on our trusted mining
                platform.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              background: "#CDE1E9",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                What makes autominer system unique?
              </Typography>
            </AccordionSummary>
            <Divider
              variant="middle"
              sx={{ background: "#1B1B1B", opacity: "0.3" }}
            />
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  color: "#1B1B1B",
                }}
              >
                We provide you a cloud mining solution that enables you earn
                bitcoin alternatively without dealing with any hassle you will
                encounter while doing physical bitcoin mining.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="signup-section">
          <div className="sign-up-text">
            <p className="signup-section-textheader">No more in doubts</p>
            <p className="signup-section-subtext">
              Join us today to unlock the potential of Bitcoin mining. Start
              your journey towards earning in life-changing currency and invest
              in the future of finance!
            </p>
          </div>
          <Link to="/sign-up" className="sign-up-btn">
            Sign Up
          </Link>
        </div>

        <div className="form-section">
          <h2> Got Questions</h2>
          <p>Ask your questions or make enquiries from our miner team</p>

          <form className="form-details">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
            <input placeholder="Email Address" type="text" />
            <input placeholder="Subject " type="text" />
            <textarea type="text" placeholder="Message" />
            <button className="send-msg-btn">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
