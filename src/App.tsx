
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/public/Login';
import StudentPage from './components/student'
import TPOPage from './components/tpo';
import { useEffect } from 'react';
import ProtectedRoute from './components/common/ProtectedRoute';
import AlumniPage from './components/alumni';
import HODPage from './components/hod';
import Unauthorized from './components/common/Unauthorized';
import PersistLogin from './components/common/PersistLogin';
import Cookies from 'js-cookie'
import Profile from './components/student/Profile/Profile';


function App() {



  useEffect(() => {

    const refresh_token = Cookies.get('refresh_token')

    if (refresh_token) {
      console.log(refresh_token);
    }

  }, [])


  return (
    <Routes>

      {/* <Route path='/' element={<div> THis is Home Page </div>} /> */}

      <Route path='/' element={<Login />} />

      <Route element={<PersistLogin />}>

        <Route path="/student" element={<ProtectedRoute role='student'><StudentPage /></ProtectedRoute>} />

        <Route path='/tpo' element={<ProtectedRoute role='tpo'><TPOPage /></ProtectedRoute>} />

        <Route path='/alumni' element={<ProtectedRoute role='alumni'><AlumniPage /></ProtectedRoute>} />

        <Route path='/hod' element={<ProtectedRoute role='hod'><HODPage /></ProtectedRoute>} />

        <Route path="/StudentProfile" element={<ProtectedRoute role='student'><Profile /></ProtectedRoute>} />

      </Route>

      <Route path='/unauthorized' element={<Unauthorized />} />

      <Route path='/*' element={<div> Page does not Exist</div>} />

    </Routes >
  );
}

export default App;
