import './style/newBus.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { CircularProgress, MenuItem, TextField } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import AddBusHook from '../../hook/bus/add-bus-hook';
import { useState } from 'react';

const NewBus = () => {
  const [
    formData,
    drivers,
    loadingDrivers,
    supervisors,
    loadingSupervisors,
    handleInputChange,
    handleSubmit,
  ] = AddBusHook();
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
          <h1>Add New Bus</h1>
        </div>
        <div className="bottom">
          <div>
            <form onSubmit={handleFormSubmit}>
              <div className="fromInput">
                <label>Bus Number</label>
                <input
                  type="text"
                  name="busNumber"
                  value={formData.busNumber}
                  onChange={handleInputChange}
                  disabled={submitting}
                  placeholder="س ج ط 2594"
                />
              </div>
              <div className="fromInput">
                <label>Bus Line</label>
                <input
                  type="text"
                  name="busLine"
                  value={formData.busLine}
                  onChange={handleInputChange}
                  disabled={submitting}
                  placeholder="Dalga"
                />
              </div>
              <div className="fromInput">
                <label>Bus Driver</label>
                <TextField
                  className="textField"
                  id="selectDriver"
                  variant="standard"
                  value={formData.driver}
                  name="driver"
                  select
                  onChange={handleInputChange}
                  disabled={submitting}
                >
                  {loadingDrivers ? (
                    <MenuItem disabled>
                      <CircularProgress size={24} />
                    </MenuItem>
                  ) : (
                    drivers &&
                    drivers.map((driver) => (
                      <MenuItem key={driver.ID} value={driver.ID}>
                        {driver['Driver Name']}
                      </MenuItem>
                    ))
                  )}
                </TextField>
              </div>
              <div className="fromInput">
                <label>Bus Supervisor</label>
                <TextField
                  className="textField"
                  id="selectSupervisor"
                  variant="standard"
                  value={formData.supervisor}
                  name="supervisor"
                  select
                  onChange={handleInputChange}
                  disabled={submitting}
                >
                  {loadingSupervisors ? (
                    <MenuItem disabled>
                      <CircularProgress size={24} />
                    </MenuItem>
                  ) : (
                    supervisors.map((supervisor) => (
                      <MenuItem key={supervisor.ID} value={supervisor.ID}>
                        {supervisor['Supervisor Name']}
                      </MenuItem>
                    ))
                  )}
                </TextField>
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

export default NewBus;
