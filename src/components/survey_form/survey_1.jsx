// import React, { useState } from "react";
// import "./survey.css";
// import { useNavigate } from 'react-router-dom';

// const Survey1 = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     age: "",
//     gender: "",
//     family_history: "",
//     work_interfere: "",
//     benefits: "",
//     care_options: "",
//     anonymity: "",
//     leave: "",
//     mental_health_consequence: "",
//     coworkers: "",
//     supervisor: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // If onSubmit returns a promise, wait for it
//     await onSubmit(formData);
//     navigate('/survey/normal_user/dashboard_1');  // Fixed typo here
//   };

//   return (
//     <div className="survey-container">
//       <h2>Mental Health Survey</h2>
//       <form className="survey-form" onSubmit={handleSubmit}>
//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Gender:
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//         </label>

//         <label>
//           Family History:
//           <select
//             name="family_history"
//             value={formData.family_history}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//           </select>
//         </label>

//         <label>
//           Work Interference:
//           <select
//             name="work_interfere"
//             value={formData.work_interfere}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Never</option>
//             <option>Rarely</option>
//             <option>Sometimes</option>
//             <option>Often</option>
//           </select>
//         </label>

//         <label>
//           Benefits:
//           <select
//             name="benefits"
//             value={formData.benefits}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//             <option>Don't know</option>
//           </select>
//         </label>

//         <label>
//           Care Options:
//           <select
//             name="care_options"
//             value={formData.care_options}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//             <option>Not sure</option>
//           </select>
//         </label>

//         <label>
//           Anonymity:
//           <select
//             name="anonymity"
//             value={formData.anonymity}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//             <option>Don't know</option>
//           </select>
//         </label>

//         <label>
//           Medical Leave Difficulty:
//           <select
//             name="leave"
//             value={formData.leave}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Very difficult</option>
//             <option>Somewhat difficult</option>
//             <option>Don't know</option>
//             <option>Somewhat easy</option>
//             <option>Very easy</option>
//           </select>
//         </label>

//         <label>
//           Mental Health Consequences:
//           <select
//             name="mental_health_consequence"
//             value={formData.mental_health_consequence}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//             <option>Maybe</option>
//           </select>
//         </label>

//         <label>
//           Comfort with Coworkers:
//           <select
//             name="coworkers"
//             value={formData.coworkers}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//             <option>Some of them</option>
//           </select>
//         </label>

//         <label>
//           Comfort with Supervisor:
//           <select
//             name="supervisor"
//             value={formData.supervisor}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option>Yes</option>
//             <option>No</option>
//             <option>Some of them</option>
//           </select>
//         </label>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Survey1;




import React, { useState } from "react";
import "./survey.css";
import { useNavigate } from 'react-router-dom';

const Survey1 = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    family_history: "",
    work_interfere: "",
    benefits: "",
    care_options: "",
    anonymity: "",
    leave: "",
    mental_health_consequence: "",
    coworkers: "",
    supervisor: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can log or handle formData here if needed
    navigate('/survey/normal_user/dashboard_1');
  };

  return (
    <div className="survey-container">
      <h2>Mental Health Survey</h2>
      <form className="survey-form" onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Family History:
          <select
            name="family_history"
            value={formData.family_history}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>

        <label>
          Work Interference:
          <select
            name="work_interfere"
            value={formData.work_interfere}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Never</option>
            <option>Rarely</option>
            <option>Sometimes</option>
            <option>Often</option>
          </select>
        </label>

        <label>
          Benefits:
          <select
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Don't know</option>
          </select>
        </label>

        <label>
          Care Options:
          <select
            name="care_options"
            value={formData.care_options}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>

        <label>
          Anonymity:
          <select
            name="anonymity"
            value={formData.anonymity}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Don't know</option>
          </select>
        </label>

        <label>
          Medical Leave Difficulty:
          <select
            name="leave"
            value={formData.leave}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Very difficult</option>
            <option>Somewhat difficult</option>
            <option>Don't know</option>
            <option>Somewhat easy</option>
            <option>Very easy</option>
          </select>
        </label>

        <label>
          Mental Health Consequences:
          <select
            name="mental_health_consequence"
            value={formData.mental_health_consequence}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
        </label>

        <label>
          Comfort with Coworkers:
          <select
            name="coworkers"
            value={formData.coworkers}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Some of them</option>
          </select>
        </label>

        <label>
          Comfort with Supervisor:
          <select
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Some of them</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Survey1;
