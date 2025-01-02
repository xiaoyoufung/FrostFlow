import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="min-h-full">
        <Navbar />

        
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="text-5xl ">App</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
