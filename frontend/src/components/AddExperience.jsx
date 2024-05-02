import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/add_experience.css";
import API_BASE_URL from "./ApiConfig";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "./delete.svg";
import { ReactComponent as AddIcon } from "./add.svg";
import Select from "react-select";

function AddExperience() {
  let loggedInUser = JSON.parse(localStorage.getItem("user"));
  let loggedInUserObject = loggedInUser.email;

  const [models, setModels] = useState([]);
  const fetchData = () => {
    axios
      .get(`${API_BASE_URL}/api/addwork/?email=${loggedInUserObject}`)
      .then((response) => {
        setModels(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [loggedInUserObject]);

  const [formData, setFormData] = useState({
    email: loggedInUserObject,
    title: "",
    emp_type: "Full-time",
    company: "",
    location: "",
    location_type: "On-site",
    currently_working: true,
    start_time: "",
    end_time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(formData);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(
      (field) => field === ""
    );

    if (isAnyFieldEmpty) {
      console.error("Error: All fields must be filled");
      return;
    }

    try {
      console.log(formData);
      axios
        .post(`${API_BASE_URL}/api/addwork/`, formData)
        .then((response) => {
          console.log("Experience added successfully:", response.data);
          setFormData({
            email: loggedInUserObject,
            title: "",
            emp_type: "Full-time",
            company: "",
            location: "",
            location_type: "On-site",
            currently_working: true,
            start_time: "",
            end_time: "",
          });
          fetchData();
        })
        .catch((error) => {
          console.log("Error adding Work:", error);
        });
    } catch (error) {
      console.error("Error Adding Work:", error);
    }
  };

  const [isAddDivVisible, setIsAddDivVisible] = useState(false);

  const toggleAddDiv = () => {
    setIsAddDivVisible(!isAddDivVisible);
  };

  const buttonLabel1 = isAddDivVisible ? "" : "Add more";
  const buttonLabel2 = isAddDivVisible ? "" : "Work Experience";

  const handleDelete = (index) => {
    // console.log(models[index]);
    axios
      .delete(`${API_BASE_URL}/api/addwork/`, { data: models[index] })
      .then((response) => {
        if (response.status === 200) {
          // Update your local state to reflect the deletion
          const updatedModels = [...models];
          updatedModels.splice(index, 1);
          setModels(updatedModels);
        }
      })
      .catch((error) => {
        console.error("Error deleting item", error);
      });
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      borderRadius: "10px",
      border: "1px solid #d9d9d9",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#3818fd" : "white",
      color: state.isSelected ? "white" : "#4a4a4a",
      ":hover": {
        backgroundColor: state.isSelected ? "#3818fd" : "#f3f3f3",
        color: state.isSelected ? "white" : "#4a4a4a",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0px",
      margin: "0px",
    }),
    input: (provided) => ({
      ...provided,
      padding: "0px",
      margin: "0px",
    }),
  };

  function convertDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startMonth = start.toLocaleString("default", { month: "short" });
    const endMonth = end.toLocaleString("default", { month: "short" });

    const formattedStartDate = `${startMonth} ${start.getFullYear()}`;
    const formattedEndDate = `${endMonth} ${end.getFullYear()}`;

    const diffInMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth() +
      1;
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;

    const durationString = `${
      years > 0 ? years + " year" + (years > 1 ? "s" : "") : ""
    }${years > 0 && months > 0 ? " " : ""}${
      months > 0
        ? months + " month" + (months > 1 ? "s" : "")
        : years === 0 && months === 0
        ? "1 month"
        : ""
    }`;

    return `${formattedStartDate} - ${formattedEndDate} · ${durationString}`;
  }

  return (
    <div className="addexp">
      <h1>👔 Add any previous employment history</h1>

      {models.map((model, index) => (
        <div className="addexp-box " id="addexpbox1">
          <div className="exp-details">
            <div style={{display:"flex",justifyContent:"space-between",width:"100%",gap:"10px"}}>
              <label htmlFor="">Title:</label>
              <p style={{ fontWeight: "700" }}>{model.title}</p>
            </div>

            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
              <label htmlFor="">Company:</label>
              <p>
                {model.company}
              </p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
              <label htmlFor="">Job Type:</label>
              <p>
                {model.emp_type}
              </p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between" ,width:"100%"}}>
              <label htmlFor="">From:</label>
              <p>{model.start_time}</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
              <label htmlFor="">To:</label>
              <p>
                {model.end_time}
              </p>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}}>
              <label htmlFor="">Location:</label>
              <p>
                {model.location} · {model.location_type}
              </p>
            </div>
          </div>
          <div className="edit-delete-btns">
            <button className="edit-exp-btn">Edit</button>
            <button
              onClick={() => handleDelete(index)}
              className="delete-exp-btn"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}

      <div
        className="addexp-box"
        id="add_div"
        style={{ display: isAddDivVisible ? "block" : "none" }}
      >
        <div className="addexp-box-contents">
          <form onSubmit={handleSubmit} className="addexp-form" action="">
            <div className="add-exp-form-section title">
              <label htmlFor="" style={{ marginLeft: "25px" }}>
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                autoComplete="off"
              />
            </div>

            <div className="add-exp-form-section">
              <label htmlFor="" style={{ marginLeft: "25px" }}>
                Job type
              </label>
              <Select
                value={{ label: formData.emp_type, value: formData.emp_type }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, emp_type: selectedOption.value })
                }
                options={[
                  { label: "Full-time", value: "Full-time" },
                  { label: "Part-time", value: "Part-time" },
                ]}
                styles={selectStyles}
              />
            </div>
            <div className="add-exp-form-section">
              <label htmlFor="" style={{ marginLeft: "25px" }}>
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                autoComplete="off"
              />
            </div>

            <div className="add-exp-form-section">
              <label htmlFor="" style={{ marginLeft: "25px" }}>
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                autoComplete="off"
              />
            </div>
            <div className="add-exp-form-section">
              <label htmlFor="" style={{ marginLeft: "25px" }}>
                Location Type
              </label>
              <Select
                value={{
                  label: formData.location_type,
                  value: formData.location_type,
                }}
                onChange={(selectedOption) =>
                  setFormData({
                    ...formData,
                    location_type: selectedOption.value,
                  })
                }
                options={[
                  { label: "On-site", value: "On-site" },
                  { label: "Hybrid", value: "Hybrid" },
                  { label: "Remote", value: "Remote" },
                ]}
                styles={selectStyles}
              />
            </div>

            <div className="add-exp-form-section">
              <label htmlFor="" style={{ marginLeft: "25px" }}>
                Start Time
              </label>
              <input
                type="date"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
              />
            </div>

            <div className="add-exp-form-section">
              <label
                htmlFor=""
                style={{ marginDown: "20px", marginLeft: "25px" }}
              >
                End Time
              </label>
              <input
                type="date"
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
              />
            </div>

            <div className="continue">
              <button className="continue-btn" type="submit">
                Add Work
              </button>
            </div>
          </form>
        </div>
      </div>
      {buttonLabel1 && (
        <button onClick={toggleAddDiv} className="addbutton" id="addbtnaddexp">
          <div className="add-btn-text">
            {buttonLabel1}
            <br />
            {buttonLabel2}
          </div>
          <div className="add-icon">
            <AddIcon />
          </div>
        </button>
      )}

      <Link style={{ textDecoration: "none" }} to="/home" id="addexpa">
        <button id="addexpbtn" className="continue-btn" type="submit">
          DONE
        </button>
      </Link>
    </div>
  );
}

export default AddExperience;
