import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import StatsCard from './Components/StatsCard';
import VisitorsChart from './Components/VisitorsChart';
import RecentAppointments from './Components/RecentAppointments';
import './Components/Global.css';
import PatientsBarGraph from './Components/PatientsBarGraph';
const App = () => {
  return (
    <div>
      <Sidebar />
      <div className='bg-white p-[1rem] ml-[16rem] mt-6 rounded-3xl'>
        <Header />
        <div style={styles.statsContainer}>
          <StatsCard title="Total Patients" value="2,420" percentageChange={47} />
          <StatsCard title="New Appointments" value="226" percentageChange={-10} />
          <StatsCard title="Pending Reports" value="193" percentageChange={25} />
        </div>
        <div className='flex space-x-4'>
          <VisitorsChart />
          <PatientsBarGraph />
        </div>
        <RecentAppointments />
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    background: '#f8fafc',
    padding: '1rem',
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginBottom: '1rem',
  },
};

export default App;
