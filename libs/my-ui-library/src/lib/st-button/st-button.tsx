/* eslint-disable-next-line */
export interface StButtonProps {
  children: React.ReactNode;
}

export function StButton({children}: StButtonProps) {
  return (
    <button className="bg-green-300 p-3 rounded border shadow-md">
      {children}
    </button>
  );
}

export default StButton;
