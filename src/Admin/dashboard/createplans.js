import React, { useState } from "react";
import "./createplans.css";
import AdminHeader from "./adminHeader";

const CreatePlan = () => {
  // State to track form inputs
  const [formData, setFormData] = useState({
    planName: "",
    minAmount: "",
    maxAmount: "",
    roi: "",
    duration: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new plan object
    const newPlan = {
      id: Date.now(), // Simple unique ID
      planName: formData.planName,
      minAmount: parseFloat(formData.minAmount),
      maxAmount: parseFloat(formData.maxAmount),
      roi: parseFloat(formData.roi),
      duration: parseInt(formData.duration),
    };

    // Here you would typically save the plan to your database
    console.log("New plan created:", newPlan);

    // Reset form
    setFormData({
      planName: "",
      minAmount: "",
      maxAmount: "",
      roi: "",
      duration: "",
    });
  };

  return (
    <div>
      <AdminHeader />{" "}
      <div className="plans-container">
        <h1 className="plans-heading">Create Investment Plan</h1>

        {/* Admin Form Section */}
        <div className="admin-form-container">
          <form onSubmit={handleSubmit} className="plan-form">
            <div className="form-group">
              <label htmlFor="planName">Plan Name</label>
              <input
                type="text"
                id="planName"
                name="planName"
                value={formData.planName}
                onChange={handleInputChange}
                placeholder="Enter plan name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="minAmount">Minimum Amount ($)</label>
                <input
                  type="number"
                  id="minAmount"
                  name="minAmount"
                  value={formData.minAmount}
                  onChange={handleInputChange}
                  placeholder="Minimum investment amount"
                  required
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="maxAmount">Maximum Amount ($)</label>
                <input
                  type="number"
                  id="maxAmount"
                  name="maxAmount"
                  value={formData.maxAmount}
                  onChange={handleInputChange}
                  placeholder="Maximum investment amount"
                  required
                  min="0"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="roi">ROI (%)</label>
                <input
                  type="number"
                  id="roi"
                  name="roi"
                  value={formData.roi}
                  onChange={handleInputChange}
                  placeholder="Return on investment percentage"
                  required
                  step="0.1"
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration (Days)</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="Investment duration in days"
                  required
                  min="1"
                />
              </div>
            </div>

            <div className="create-plan-btn">
              <button type="submit" className="create-plan-button">
                Create Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
