
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './pages/public/Login';

import ProtectedRoute from './pages/common/ProtectedRoute';
import Unauthorized from './pages/common/Unauthorized';
import PersistLogin from './pages/common/PersistLogin';


import Drive from './pages/student/Drive/Drive';
import StudentLayout from './pages/student/Layout/Layout';
import StudentProfile from './pages/student/Profile/Profile';
import OngoingDrive from './pages/student/OngoingDrives/OngoingDrives';
import Companies from './pages/student/Companies/Companies';
import StudentDashboard from './pages/student/Dashboard/Dashboard';


import TPOLayout from './pages/tpo/Layout/Layout';
import TPOProfile from './pages/tpo/Profile/Profile';
import AddCompany from './pages/tpo/AddCompany/AddComapny';
import AddDrive from './pages/tpo/AddDrive/AddDrive';
import AddStudentPage from './pages/tpo/AddStudent/AddStudentPage';
import TPODashboard from './pages/tpo/TPODashboard';
import DrivePage from './pages/tpo/DrivePage';

import AlumniLayout from './pages/alumni/Layout/Layout';
import AlumniDashboard from './pages/alumni/Dashboard/Dashboard';
import AlumniProfile from './pages/alumni/Profile/Profile';
import AlumniCompany from './pages/alumni/Company/Company';

import HODLayout from './pages/hod/Layout/Layout';
import ManageDriveStatus from './pages/tpo/ManageDriveStatus/ManageDriveStatus';
import ManageStudentDrive from './pages/tpo/ManageStudentDrive/ManageStudentDrive';
import HomePage from './pages/public/HomePage/HomePage';
import CompanyPage from './pages/alumni/CompanyPage/CompanyPage';


function App() {


  return (
    <Routes>
      {/* <Route path='/' element={<div> THis is Home Page </div>} /> */}
      {/* 
      <Route index element={<Login />} /> */}

      <Route path='/' element={<PersistLogin />}>
        <Route index element={<HomePage />} />
        <Route path="student" element={<ProtectedRoute role='student'><StudentLayout /></ProtectedRoute>} >
          <Route index element={<StudentDashboard />} />
          <Route path='profile' element={<StudentProfile />} />
          <Route path='companies' element={<Companies />} />
          <Route path='upcoming' element={<OngoingDrive />} />
          <Route path='drive' element={<Drive />} />  

        </Route>

        <Route path='tpo' element={<ProtectedRoute role='tpo'><TPOLayout /></ProtectedRoute>}  >
          <Route index element={<TPODashboard />} />
          <Route path='drive' element={<Outlet />} >
            <Route index element={<DrivePage />} />
            <Route path='managedrive' element={<ManageDriveStatus />} />
            <Route path='students' element={<ManageStudentDrive />} />
          </Route>
          <Route path='addcompany' element={<AddCompany />} />
          <Route path='adddrive' element={<AddDrive />} />
          <Route path='addstudent' element={<AddStudentPage />} />
          <Route path='profile' element={<TPOProfile />} />

        </Route>

        <Route path='alumni' element={<ProtectedRoute role='alumni'><AlumniLayout /></ProtectedRoute>} >
          <Route index element={<AlumniDashboard />} />
          <Route path='profile' element={<AlumniProfile />} />
          <Route path='experience' element={<AlumniCompany />} />
          <Route path='company' element={<CompanyPage />}></Route>
        </Route>

        <Route path='hod' element={<ProtectedRoute role='hod'><HODLayout /></ProtectedRoute>} >

          {/* <Route index element={<HODProfile/>}></Route> */}

        </Route>

      </Route>

      <Route path='unauthorized' element={<Unauthorized />} />

      <Route path='/*' element={<div> Page does not Exist</div>} />

    </Routes >
  );
}

export default App;
