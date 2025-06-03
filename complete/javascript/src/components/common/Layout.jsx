import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <main className="flex-1 ml-20 w-[calc(100%-5rem)] p-4 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
