import './App.css';
import Router from './router';
import 'animate.css';

function App() {
  return (
    <div className='w-full h-screen bg-[#18181b] flex flex-col justify-start items-center relative overflow-y-auto' style={{ backgroundImage: "url('/images/background-image.png')", }}>
      <Router />
    </div>
  );
}

export default App;
