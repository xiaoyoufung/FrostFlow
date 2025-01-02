import PropTypes from "prop-types";

const NavbarUserProfile = ({imageUrl, name, email}) => {
  return (
    <div className="flex items-center px-4">
      <div className="shrink-0">
        <img alt="" src={imageUrl} className="size-8 rounded-full" />
      </div>
      <div className="ml-3 text-left">
        <div className="text-sm/5 font-medium text-grey">{name}</div>
        <div className="text-xs font-medium text-gray-400">{email}</div>
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
