import React, { useState, useEffect } from "react";
import "./allplans.css";
import AdminHeader from "./adminHeader";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import { FaEdit, FaTrash } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const AllPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editPlan, setEditPlan] = useState({
    plan_name: "",
    min_amount: "",
    max_amount: "",
    roi: "",
    duration: "",
  });

  const token = Cookies.get("access_token");

  // Fetch all plans
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://autominner-backend.onrender.com/api/admin/plans",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching plans:", error);
      toast.error("Failed to load investment plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  // Handle delete plan
  const handleDeleteClick = (plan) => {
    setPlanToDelete(plan);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    const toastLoadingId = toast.loading("Deleting plan...");
    try {
      await axios.delete(
        `https://autominner-backend.onrender.com/api/admin/plans/${planToDelete._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Plan deleted successfully");
      fetchPlans(); // Refresh plans list
    } catch (error) {
      console.error("Error deleting plan:", error);
      toast.error("Failed to delete plan");
    } finally {
      toast.dismiss(toastLoadingId);
      setDeleteDialogOpen(false);
      setPlanToDelete(null);
    }
  };

  // Handle edit plan
  const handleEditClick = (plan) => {
    setEditPlan({
      _id: plan._id,
      plan_name: plan.plan_name,
      min_amount: plan.min_amount,
      max_amount: plan.max_amount,
      roi: plan.roi,
      duration: plan.duration,
    });
    setEditDialogOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditPlan({
      ...editPlan,
      [name]: value,
    });
  };

  const submitEdit = async () => {
    // Validate data
    if (parseFloat(editPlan.min_amount) >= parseFloat(editPlan.max_amount)) {
      toast.error("Maximum amount must be greater than minimum amount");
      return;
    }

    const toastLoadingId = toast.loading("Updating plan...");
    try {
      await axios.put(
        `https://autominner-backend.onrender.com/api/admin/plans/${editPlan._id}`,
        editPlan,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Plan updated successfully");
      fetchPlans(); // Refresh plans list
      setEditDialogOpen(false);
    } catch (error) {
      console.error("Error updating plan:", error);
      toast.error("Failed to update plan");
    } finally {
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <div className="all-plans-page">
      <AdminHeader />
      <div className="plans-container">
        <div className="plans-header">
          <h1 className="plans-heading">All Investment Plans</h1>
          <p className="plans-subheading">
            Manage all available investment plans
          </p>
          <button
            className="add-plan-button"
            onClick={() => (window.location.href = "/admin/create-plan")}
          >
            + Add New Plan
          </button>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading plans...</p>
          </div>
        ) : plans.length === 0 ? (
          <div className="no-plans-message">
            <p>
              No investment plans found. Create your first plan to get started.
            </p>
          </div>
        ) : (
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan._id} className="plan-card">
                <div className="plan-card-header">
                  <h2 className="plan-title">{plan.plan_name}</h2>
                  <div className="plan-actions">
                    <button
                      className="edit-button"
                      onClick={() => handleEditClick(plan)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteClick(plan)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <div className="plan-price">
                  <span className="price-range">
                    ${plan.min_amount} - ${plan.max_amount}
                  </span>
                </div>
                <div className="plan-details">
                  <div className="detail-item">
                    <span className="detail-label">ROI:</span>
                    <span className="detail-value">{plan.roi}%</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{plan.duration} days</span>
                  </div>
                </div>
                <div className="plan-status">
                  <span
                    className={`status-badge ${
                      plan.active ? "active" : "active"
                    }`}
                  >
                    {plan.active ? "Active" : "Active"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="delete-dialog-title"
      >
        <DialogTitle id="delete-dialog-title">
          {"Confirm Delete Plan"}
        </DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete the plan "{planToDelete?.plan_name}
            "? This action cannot be undone.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Plan Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        aria-labelledby="edit-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="edit-dialog-title">
          {"Edit Investment Plan"}
        </DialogTitle>
        <DialogContent>
          <div className="edit-form">
            <div className="form-group">
              <label htmlFor="plan_name">Plan Name</label>
              <input
                type="text"
                id="plan_name"
                name="plan_name"
                value={editPlan.plan_name}
                onChange={handleInputChange}
                placeholder="Enter plan name"
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
                  value={editPlan.min_amount}
                  onChange={handleInputChange}
                  placeholder="Minimum investment amount"
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
                  value={editPlan.max_amount}
                  onChange={handleInputChange}
                  placeholder="Maximum investment amount"
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
                  value={editPlan.roi}
                  onChange={handleInputChange}
                  placeholder="Return on investment percentage"
                  required
                  step="0.1"
                  min="0"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration (Days)</label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={editPlan.duration}
                  onChange={handleInputChange}
                  placeholder="Investment duration in days"
                  required
                  min="1"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button onClick={submitEdit} color="primary" variant="contained">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllPlans;
