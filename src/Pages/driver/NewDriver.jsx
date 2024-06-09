import './style/newDriver.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import AddDriverHook from './../../hook/driver/add-driver-hook';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const NewDriver = () => {
  const [formData, file, handleFileChange, handleInputChange, handelSubmit] =
    AddDriverHook();
  const [submitting, setSubmitting] = useState(false);
  // Set submitting state when handleSubmit is called
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await handelSubmit(e);
    setSubmitting(false);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Driver</h1>
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
                  name="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label>Full Name</label>
                <input
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Mostafa Mohamed"
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label>Email</label>
                <input
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  type="mail"
                  placeholder="mm_taha@gmail.com"
                  disabled={submitting}
                />
              </div>
              <div className="fromInput">
                <label>Phone</label>
                <input
                  value={formData.phone}
                  name="phone"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="+20 111 421 6518"
                  pattern="^01[0125][0-9]{8}$"
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

export default NewDriver;
