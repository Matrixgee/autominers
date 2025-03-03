// import {
//     fname,
//     setFName,
//     lname,
//     setLastName,
//     email,
//     setEmail,
//     username,
//     setUsername,
//     password,
//     setPassword,
//     errors,
//     setError,
//     confirmPassword,
//     setConfirmPassword,
//     hasError,
//     setHasError 
// } from "./SignupUsestate";


// const SignupProps = () => {


//   const handleCPassword = (e) => {
//     if (!e.value) return;
//     if (password != confirmPassword) {
//       setHasError(true);
//       const errorList = errors.map((err) =>
//         err.id === errors.length - 1
//           ? { id: err.id + 1, message: "Password Mismatched" }
//           : { item }
//       );
//       setError(errorList);
//     }
//   };
//   const showPassword = (e) => {
//     e.type = "text";
//   };
//   const handleFirstName = (e) => {
//     if (!e.value) return;
//     setLastName(e.value);
//   };
//   const handleLastName = (e) => {
//     if (!e.value) return;
//     setLastName(e.value);
//   };
//   const handlePassword = (e) => {
//     if (!e.value) return;
//     setPassword(password);
//   };
//   const handleUsername = (username) => {
//     if (!username) return;
//     setUsername(username);
//   };
//    const handleEmail = (email) => {
//     if (!email) return;
//     setEmail(email);
//   };
// return{
//     handleCPassword,
//     handleEmail,
//     handleFirstName,
//     handleLastName,
//     handleUsername,
//     handlePassword
//   }
// };


// handleCPassword
//     handleEmail
//     handleFirstName
//     handleLastName
//     handleUsername
//     handlePassword

// export default SignupProps;
