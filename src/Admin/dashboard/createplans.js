import React, { useState } from "react";
import "./createplans.css";
import AdminHeader from "./adminHeader";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const CreatePlan = () => {
  // State to track form inputs
  const [formData, setFormData] = useState({
    plan_name: "",
    min_amount: "",
    max_amount: "",
    roi: "",
    duration: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate data
    if (parseFloat(formData.min_amount) >= parseFloat(formData.max_amount)) {
      toast.error("Maximum amount must be greater than minimum amount");
      return;
    }

    const token = Cookies.get("access_token");
    setIsLoading(true);
    const toastLoadingId = toast.loading("Creating investment plan...");

    try {
      const response = await axios.post(
        "https://autominner-backend.onrender.com/api/admin/plans",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Investment plan created successfully!");
      // Reset form
      setFormData({
        plan_name: "",
        min_amount: "",
        max_amount: "",
        roi: "",
        duration: "",
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error creating plan:", error);
      toast.error(
        error.response?.data?.message || "Failed to create investment plan"
      );
    } finally {
      setIsLoading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="create-plan-page">
      <AdminHeader />
      <div className="plans-container">
        <div className="plans-header">
          <h1 className="plans-heading">Create Investment Plan</h1>
          <p className="plans-subheading">
            Set up a new investment package for your users
          </p>
        </div>

        {/* Admin Form Section */}
        <div className="admin-form-container">
          <form onSubmit={handleSubmit} className="plan-form">
            <div className="form-group">
              <label htmlFor="plan_name">Plan Name</label>
              <input
                type="text"
                id="plan_name"
                name="plan_name"
                value={formData.plan_name}
                onChange={handleInputChange}
                placeholder="Enter plan name (e.g. Silver Package)"
                required
                className="form-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="min_amount">Minimum Amount ($)</label>
                <input
                  type="number"
                  id="min_amount"
                  name="min_amount"
                  value={formData.min_amount}
                  onChange={handleInputChange}
                  placeholder="100"
                  required
                  min="0"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="max_amount">Maximum Amount ($)</label>
                <input
                  type="number"
                  id="max_amount"
                  name="max_amount"
                  value={formData.max_amount}
                  onChange={handleInputChange}
                  placeholder="1000"
                  required
                  min="0"
                  className="form-input"
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
                  placeholder="15.5"
                  required
                  step="0.1"
                  min="0"
                  className="form-input"
                />
                <small className="form-helper-text">
                  Return on investment percentage
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration (Days)</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="30"
                  required
                  min="1"
                  className="form-input"
                />
                <small className="form-helper-text">
                  Investment period length
                </small>
              </div>
            </div>

            <div className="form-actions">
              {/* <button
                type="button"
                className="cancel-button"
                onClick={() => {
                  setFormData({
                    plan_name: "",
                    min_amount: "",
                    max_amount: "",
                    roi: "",
                    duration: "",
                  });
                }}
              >
                Cancel
              </button> */}
              <button
                type="submit"
                className="create-plan-button"
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create Plan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
