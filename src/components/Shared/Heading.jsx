import PropTypes from 'prop-types'
const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-3xl font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text'>{title}</div>
      <div className='font-light text-xl text-neutral-500 mt-2'>{subtitle}</div>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  center: PropTypes.bool,
}

export default Heading
