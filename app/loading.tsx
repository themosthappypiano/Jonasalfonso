export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <output className="tetrominos" aria-label="Loading">
        <div className="tetromino box1" />
        <div className="tetromino box2" />
        <div className="tetromino box3" />
        <div className="tetromino box4" />
      </output>
    </div>
  );
}
