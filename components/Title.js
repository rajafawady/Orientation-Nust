const Title = ({ children }) => {
  return (
    <div className="max-w-full -z-10 max-h-screen fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="font-black text-stroke opacity-75">{children}</h1>
    </div>
  );
};

export default Title;
