
import { Routes, Route } from 'react-router-dom';
import Login from './components/public/Login';
import StudentPage from './components/student'
import TPOPage from './components/tpo';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>

      <Route path='/' element={<div> THis is HOme Page </div>} />

      <Route path='/login' element={<Login />} />

      <Route path="/student" element={<ProtectedRoute><StudentPage /></ProtectedRoute>} />

      <Route path='/tpo' element={<ProtectedRoute><TPOPage /></ProtectedRoute>} />

      <Route path='/*' element={<div> Page does not Exist</div>} />

    </Routes >
  );
}

export default App;
