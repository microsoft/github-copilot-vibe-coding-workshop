const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
  </svg>
);

const FloatingActionButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50 hover:bg-blue-700 active:scale-95 transition-transform"
      aria-label="Create new post"
    >
      <PlusIcon />
    </button>
  );
};

export default FloatingActionButton;
