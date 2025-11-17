const variants = {
//   primary: "bg-blue-600 text-white hover:bg-blue-700",
//   secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  outline: "border border-[#E6F7EE] text-[#E6F7EE] hover:bg-blue-",
//   danger: "bg-red-600 text-white hover:bg-red-700",
  success:"bg-[#00AA55] text-[#FEFEFE] hover:bg-[#00994D]"
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-[12px] py-[10px] text-lg",
};


export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "lg",
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg  transition-all cursor-pointer duration-200 active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}