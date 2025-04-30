import React, { useState } from "react";
import "../../pages/Login.css";
import logo from "../../pages/img/logo.png";
import loginImg from "../../pages/img/LoginBackground.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterAdmin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showPassword = () => {
    setVisibility((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const toastId = toast.loading("Creating account...");

    try {
      const response = await fetch(
        "https://api.autominner.com/api/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      setSuccess(true);
      toast.success("Registration successful");
      navigate("/admin/login");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="form_container">
        <div className="first_cont">
          <div className="loginForm">
            <div className={error ? "ErrorMsg" : ""}>
              {error && <p className="Msg">{error}</p>}
              {success && (
                <p className="Msg">Registration successful! Redirecting...</p>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <h5 className="heading2">Register Admin</h5>
              <div className="inputContainer">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />

                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />

                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                  placeholder="admin123"
                  required
                />

                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                />

                <label>Password</label>
                <div className="passwordCnt">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="********"
                    required
                  />
                  <span className="showpass" onClick={showPassword}>
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                </div>
              </div>
              <div className="buttonContainer">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
                <p className="dontHaveAccount">
                  Already have an account?{" "}
                  <Link to="/admin/login">
                    <strong>Login</strong>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="sec_cont">
          <div className="loginImg">
            <img src={loginImg} alt="Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdmin;
