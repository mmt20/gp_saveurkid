import './style/newSupervisor.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import { ToastContainer } from 'react-toastify';
import AddSupervisorHook from '../../hook/supervisor/add-supervisor-hook';
import { useState } from 'react';

const NewSuprvisor = () => {
  const [file, formData, handleChange, handleFileChange, handleSubmit] =
    AddSupervisorHook();

  const [submitting, setSubmitting] = useState(false);
  // Set submitting state when handleSubmit is called
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await handleSubmit(e);
    setSubmitting(false);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Supervisor</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="avatar"
            />
          </div>
          <div className="right">
            <form onSubmit={handleFormSubmit}>
              <div className="fromInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Mostafa Mohamed"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mm_taha@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+20 111 421 6518"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Dayr Mawas St. 216 Bani Omran"
                  value={formData.address}
                  onChange={handleChange}
                  disabled={submitting}
                />
              </div>
              <button type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewSuprvisor;
