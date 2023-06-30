import { StButton, Stam } from '@seetrue/my-ui-library';
import { formatDate } from '@seetrue/utils-functions';

import { Route, Routes, Link } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export function App() {
  const date = formatDate(new Date());

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="bg-slate-700">
        <Stam />
        <ul>
          <li>
            <StButton>
              <Link to="/">Home!</Link>
            </StButton>
          </li>
          <li>
            <StButton>
              <Link to="/about">About</Link>
            </StButton>
          </li>
        </ul>
        <p>Date is: {date}</p>
      </div>
      <main className="flex-1 bg-slate-300 flex justify-center items-center">
        <Router />
      </main>
    </div>
  );
}

export default App;
