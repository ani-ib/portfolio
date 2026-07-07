export default function Avatar3D({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <iframe
        src="https://my.spline.design/roomgirl-H4IBFp57vOmzB447yh32Zu5m/"
        frameBorder="0"
        title="3D Avatar"
        className="w-full h-full"
        style={{ border: 'none', background: 'transparent' }}
      />
    </div>
  );
}
