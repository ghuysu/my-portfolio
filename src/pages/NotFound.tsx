const NotFound = () => {
  return (
    <div className="h-[calc(100vh-theme(height.20))] flex flex-col items-center justify-center">
      <img className="w-1/2" src="/assets/images/notfound.png" />
      <p className="mt-8 text-4xl font-bold">NOT FOUND</p>
    </div>
  );
};

export default NotFound;
