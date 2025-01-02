import PropTypes from "prop-types";

const NavbarUserProfile = ({imageUrl, name, email}) => {
  return (
    <div className="flex items-center px-4">
      <div className="shrink-0">
        <img alt="" src={imageUrl} className="size-10 lg:size-8 rounded-full" />
      </div>
      <div className="ml-3 text-left font-normal lg:font-medium">
        <div className="lg:text-sm/5  text-grey">{name}</div>
        <div className="text-sm lg:text-xs lg:text-gray-400 text-gray-500">{email}</div>
      </div>
    </div>
  );
};

NavbarUserProfile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default NavbarUserProfile;
