
import { Routes, Route } from 'react-router-dom';
import Login from './components/public/Login';
import StudentPage from './components/student'
import TPOPage from './components/tpo';

function App() {
  return (
    <Routes>

      <Route path='/' element={<div> THis is HOme Page </div>} />

      <Route path='/login' element={<Login />} />

      <Route path="/student" element={<StudentPage />} />

      <Route path='/tpo' element={<TPOPage />} />

      <Route path='/*' element={<div> Page does not Exist</div>} />

    </Routes >
  );
}

export default App;
