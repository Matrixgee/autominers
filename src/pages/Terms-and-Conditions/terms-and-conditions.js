import React from "react";
import "./terms-and-conditions.css";
import Navigation from "../../component/Navigation/Navigation";
import Footer from "../../component/Footer/footer";


const TermsAndConditions = () => {
  return (
    <div>
   <Navigation />
    <div className="terms-and-condition">
      <div className="header_section">
        <h2 className="header-text"> Terms of Use </h2>
      </div>
      <div className="body-section">
        <div className="section-one">
          <h2 className="section-heading"> 1. Preamble</h2>
          <p>
            These terms and conditions, an integral part of the Agreement
            (hereinafter: the "Agreement"), outline the rights, obligations, and
            essential conditions governing the relationship between FREDDIE WADE
            (hereinafter: the "Company"), the owner of the Autominner website
            (hereinafter: the “Autominner Website”), and the respective
            individual (hereinafter: the “Customer”) upon entering into the
            Agreement. Throughout these terms, the Company and the Customer may
            be individually referred to as the “Party” and collectively as the
            “Parties.” The Parties, by utilizing the services provided by the
            Company, hereby mutually agree as follows:
          </p>
        </div>
        <div className="section-two">
          <h2 className="section-heading">2. Definitions</h2>
          <p>
            For the purpose of this Agreement, the following terms shall be
            defined as follows:
          </p>

          <h3>Customer</h3>
          <p>
            Refers to an individual who completes the registration process and
            enters into the Agreement with the Company, in compliance with these
            terms and conditions, to access and utilize the services. The
            Customer must be at least 18 (eighteen) years of age, or the age of
            legal maturity in their jurisdiction, whichever is higher.
          </p>

          <h3>Services</h3>
          <p>
            Encompass computational power services, as agreed upon and specified
            in the Agreement, at a minimum value set by mutual consent between
            the Parties.
          </p>

          <h3>Cryptocurrency</h3>
          <p>
            Encompass computational power services, as agreed upon and specified
            in the Agreement, at a minimum value set by mutual consent between
            the Parties.
          </p>

          <h3>Personal Data</h3>
          <p>
            Signifies identifying information related to a living individual or
            information that, in conjunction with other data, can be used to
            readily ascertain an individual's identity and is provided for the
            use of the services.
          </p>

          <h3>Password</h3>
          <p>
            Signifies identifying information related to a living individual or
            information that, in conjunction with other data, can be used to
            readily ascertain an individual's identity and is provided for the
            use of the services.
          </p>
        </div>
        <div className="section-three">
          <h2 className="section-heading">3. Terminology</h2>
          <p>
            All terminology used in this Agreement shall be consistent with
            relevant laws, privacy policies, and other policies established
            separately by the Company, as well as the terminology commonly
            employed in the Company's industry.
          </p>
        </div>
        <div className="section-four">
          <h2 className="section-heading">4. Amendment of the Agreement</h2>
          <p>
            The Company reserves the right to modify the Agreement periodically,
            provided that such modifications do not contravene the pertinent
            laws and regulations of the jurisdiction in which the Company's
            headquarters are located.
          </p>
        </div>
        <div className="section-five">
          <h2 className="section-heading">5. Notification of Amendment</h2>
          <p>
            In the event of amendments to the Agreement, the Company shall
            notify the Customer of the effective date of these changes and the
            rationale behind them at least two (2) days prior to the changes
            taking effect.
          </p>
        </div>
        <div className="section-six">
          <h2 className="section-heading">
            6. Non-Application of Amended Provisions
          </h2>
          <p>
            Amended provisions shall not be applied to Customers who do not
            consent to them. In such cases, both the Company and the Customer
            reserve the right to terminate the Agreement.
          </p>
        </div>
        <div className="section-seven">
          <h2 className="section-heading">7. Service-Specific Terms</h2>
          <p>
            The Company may establish separate terms of use for each service
            with the Customer's consent.
          </p>
        </div>
        <div className="section-eight">
          <h2 className="section-heading">8. Governing Law</h2>
          <p>
            Matters not explicitly addressed in this Agreement shall be subject
            to the relevant laws and commercial practices of the jurisdiction in
            which the Company's headquarters are located.
          </p>
        </div>
        <div className="section-nine">
          <h2 className="section-heading">9. Notifications</h2>
          <p>
            The Company shall contact the Customer for notification purposes via
            the email addresses provided by users or post notifications on the
            mining site if necessary.
          </p>
          <p>
            By accepting these terms and conditions, the Customer fully
            acknowledges and agrees to the terms of the Agreement as outlined
            above. The Agreement has been drafted in English as well as in all
            other languages supported by the Autominner Website. In cases of
            discrepancies between the English version and any other language
            version, the English version shall prevail.
          </p>
        </div>
        <div className="section-ten">
          <h2 className="section-heading">10. Enquiries</h2>
          <p>
            This document constitute Autominer’s Terms of Use for this app and
            our website related services. If you have questions any questions
            about these Terms of Use or about Autominer or the content, please
            contact us at support@autominner.com or info@autominer.com
          </p>
          <p>
            you can also contact Autominer by phone at +1(318) 406-9020 or visit
            us physically/mail us at:
          </p>
          <p>Autominer</p>
          <p>
            200 King St W, Toronto,
            <br /> ON M5H 4H2,
            <br /> Canada
          </p>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  );
};

export default TermsAndConditions;
