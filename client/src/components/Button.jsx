export const Button = (props) => {
  return (
    <button
      className={`${
        props.color === "secondary"
          ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
          : "bg-yellow-500 text-white hover:bg-yellow-600"
      } mx-auto border-0 py-2 px-8 focus:outline-none rounded text-lg ${props.tailwind}`}
      onClick={props.onClick}
      type = {props.type}
    >
      {props.children}
    </button>
  );
};
