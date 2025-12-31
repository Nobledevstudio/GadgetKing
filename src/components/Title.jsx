const Title = ({ title1, title2, className = "" }) => {
  return (
    <div className='flex flex-col text-left mb-2 mt-5'>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
          {title1}
          <span className="text-teal-600 ml-2">{title2}</span>
        </h1>
        
      </div>
    </div>
  );
};
export default Title;