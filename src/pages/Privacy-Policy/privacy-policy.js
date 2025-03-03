import React from 'react'
import './privacy-policy.css'
import Navigation from '../../component/Navigation/Navigation'
import Footer from '../../component/Footer/footer'

const PrivacyPolicy = () => {

    return (
        <div> 
        <Navigation />
        <div className='privacy-policy_body'>
            <div className='header_section'>
                <h2 className='header-text'> Privacy Policy</h2>
            </div>
            <div className='body-section'>
                <div className='effective-date_section'>
                    <h2>Effective date: July 12, 2018 </h2>
                    <p>“Autominer” this page is to notify you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
                    <p>We use your data to provide and improve the mining Service. By using our Service, you agree to the collection and use of information in accordance with this policy...Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as our Terms and Conditions and are always applied to our service .... INFORMATION COLLECTION AND USE OF DATA We collect several different types of information for various purposes to provide and improve our Service to you...</p>
                </div>
                <div className='info-collection_section'>
                    <h2>Information we collect and how we use it</h2>
                    <h2>Personal Data</h2>
                    <p>While using our mining platform you are required to provide us with certain personal identifiable information that can be used to contact or identify you such as (email address, full name ,mobile number ,country region and your wallet address). If provided, your email address may be used to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you.</p>
                </div>
                <div className='tracking-data_section'>
                    <h2>Tracking and Cookies Data </h2>
                    <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <ol style={{ listStyleType: 'number' }}>
                        <li>Session Cookies: We use session cookies to operate our service.. </li>
                        <li>Preference Cookies: We use Preference Cookies to remember your preferences and various settings.</li>
                        <li>Security Cookies: We use Security Cookies for security purposes. Breadwinner AG uses the collected data for various purposes.</li>
                    </ol>
                </div>
                <div className='data-usage_section'>
                    <h2>How we Use your Data</h2>
                    <ol>
                        <li>Provide and maintain our Service to you</li>
                        <li>Allow you to participate in interactive features of our Service if necessary</li>
                        <li>Provide customer support</li>
                        <li>Gather analysis or valuable information so that we can improve our services to you</li>
                        <li>Monitor the usage of our Service from your end</li>
                        <li>Enable you ease of withdrawal of your investment payout from your dashboard</li>
                    </ol>
                </div>
                <div className='security-section'>
                    <h2>Security of Data</h2>
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, While we strive to use commercially acceptable means to protect your Personal Data, we can guarantee absolute security. Your Data Protection Rights Under General Data Protection Regulation (GDPR) *The right to withdraw your profit. You also have the right to withdraw your profit at anytime or any day on our platform with no fees applied.</p>
                </div>
                <div className='privacy-section'>
                    <h2>Children's Privacy</h2>
                    <p>Our Service does not address anyone under the age of 18 ("Children"). We do not accept personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children have provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our platform immediately.</p>
                </div>
                <div className='info-section'>
                    <h2>Contact Information</h2>
                    <p>Do you have any question regarding the privacy policy , please contact us at:</p>
                    <p>Autominer</p>
                    <p>200 King St W, Toronto,<br/> ON M5H 4H2,<br/> Canada</p>
                    <p>Email: support@autominner.com, info@autominners.com</p>
                </div>
            </div>
        </div>
       <Footer />
        </div>

    )
}

export default PrivacyPolicy