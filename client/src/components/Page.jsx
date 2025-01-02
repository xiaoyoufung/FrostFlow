import PropTypes from 'prop-types';

const Page = ({ title, description, children}) => {
  return (
    <>
    <h1>{title}</h1>
    <p>{description}</p>
    {children}
    </>
  )
}

Page.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Page