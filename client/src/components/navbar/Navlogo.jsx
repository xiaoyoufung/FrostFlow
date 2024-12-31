import frostflowLogo from "../../assets/images/frostflow-logo.svg";

const Navlogo = () => {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <div className="flex flex-col static justify-center">
        <img
          alt="FrostFlowLogo"
          src={frostflowLogo}
          className="h-8 w-auto absolute top-0"
        />
        <span className="text-sm/6 font-semibold text-gray-900">FrostFlow</span>
      </div>
    </a>
  );
};

export default Navlogo;
