import React from "react";
import "./allplans.css";
import AdminHeader from "./adminHeader";

const AllPlans = () => {
  // Sample data - replace with your actual plan data
  const plans = [
    {
      id: 1,
      title: "Basic Plan",
      price: "$9.99",
      period: "monthly",
      features: ["1 User", "5GB Storage", "Basic Support", "Limited Features"],
      popular: false,
    },
    {
      id: 2,
      title: "Pro Plan",
      price: "$19.99",
      period: "monthly",
      features: ["5 Users", "20GB Storage", "Priority Support", "All Features"],
      popular: true,
    },
    {
      id: 3,
      title: "Enterprise Plan",
      price: "$49.99",
      period: "monthly",
      features: [
        "Unlimited Users",
        "100GB Storage",
        "24/7 Support",
        "Premium Features",
        "API Access",
      ],
      popular: false,
    },
  ];

  return (
    <div>
      <AdminHeader />
      <div className="plans-container">
        <h1 className="plans-heading">All Plans</h1>
        <p className="plans-subheading">
          Select the perfect plan for your needs
        </p>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <h2 className="plan-title">{plan.title}</h2>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <div className="plan-features">
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="subscribe-button">Subscribe Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPlans;
