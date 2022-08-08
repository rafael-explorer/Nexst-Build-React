import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card4.css'

const TestimonialCard4 = (props) => {
  return (
    <div
      className={`testimonial-card4-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="testimonial-card4-icon">
        <path
          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
          className=""
        ></path>
      </svg>
      <span className="testimonial-card4-text">{props.quote}</span>
      <div className="testimonial-card4-profile">
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="testimonial-card4-image"
        />
        <div className="testimonial-card4-container">
          <span className="testimonial-card4-text1">{props.name}</span>
          <span className="testimonial-card4-text2">{props.role}</span>
        </div>
      </div>
    </div>
  )
}

TestimonialCard4.defaultProps = {
  quote:
    'Utilizo os serviços de hospedagem da Nexst e não tenho do que reclamar. Meu desenvolvimento melhorou muito e consigo entregar os trabalhos mais rapidamente.',
  rootClassName: '',
  role: 'Programadora Front-End',
  picture_src: '2f505f5c-9228-4923-91bf-784a30305d5d',
  name: 'D. Braga',
  picture_alt: 'Daiana Braga',
}

TestimonialCard4.propTypes = {
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  role: PropTypes.string,
  picture_src: PropTypes.string,
  name: PropTypes.string,
  picture_alt: PropTypes.string,
}

export default TestimonialCard4
