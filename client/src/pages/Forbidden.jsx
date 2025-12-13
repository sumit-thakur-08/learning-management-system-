const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-body">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-redColor">
          403
        </h1>
        <p className="mt-2 text-spanColor">
          You do not have permission to access this page
        </p>
      </div>
    </div>
  );
};

export default Forbidden;
