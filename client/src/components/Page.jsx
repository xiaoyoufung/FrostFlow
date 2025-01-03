import PropTypes from "prop-types";
import Navbar from "./navbar/Navbar";

const Page = ({ title, description, children }) => {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <main>
          <div className="max-w-full px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-gray-900 pt-10">
              {title}
            </h1>
            <p className="text-slate-700 my-2 text-base">{description}</p>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Page;
