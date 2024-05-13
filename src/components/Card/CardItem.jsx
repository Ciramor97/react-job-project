export default function CardItem({ children, bgColor = 'gray-100' }) {
  return (
    <div className={`bg-${bgColor} p-6 rounded-lg shadow-md`}>{children}</div>
  );
}
