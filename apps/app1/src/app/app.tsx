import { StButton, Stam } from '@seetrue/my-ui-library';
import { formatDate } from '@seetrue/utils-functions';

export function App() {
  const date = formatDate(new Date());

  return (
    <div className="bg-gray-300">
      <Stam />
      <StButton>Hello World</StButton>
      <p>Date is: {date}</p>
    </div>
  );
}

export default App;
