import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard2 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card2-testimonial-card ${props.rootClassName} `}
      >
        <div className="testimonial-card2-testimonial">
          <svg viewBox="0 0 1024 1024" className="testimonial-card2-icon">
            <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
          </svg>
          <span className="testimonial-card2-text">{props.quote}</span>
          <span className="testimonial-card2-text1">{props.name}</span>
        </div>
        <img
          alt={props.profile_alt}
          src={props.profile_src}
          className="testimonial-card2-image"
        />
      </div>
      <style jsx>
        {`
          .testimonial-card2-testimonial-card {
            width: 100%;
            height: 412px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            justify-content: space-between;
          }
          .testimonial-card2-testimonial {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card2-icon {
            width: var(--dl-size-size-small);
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-card2-text {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-card2-text1 {
            font-size: 1.5rem;
            font-weight: 600;
          }
          .testimonial-card2-image {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-xlarge);
            object-fit: cover;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-card2-root-class-name1 {
            height: 100%;
            align-self: flex-start;
          }
          @media (max-width: 767px) {
            .testimonial-card2-testimonial-card {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .testimonial-card2-testimonial {
              margin-right: var(--dl-space-space-twounits);
            }
            .testimonial-card2-icon {
              height: var(--dl-size-size-small);
            }
          }
          @media (max-width: 479px) {
            .testimonial-card2-testimonial-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-card2-testimonial {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .testimonial-card2-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard2.defaultProps = {
  name: 'C. Wenner',
  rootClassName: '',
  profile_alt: 'profile',
  quote:
    'A Nexst fez minha lojinha virtual usando WordPress e está sempre me dando manutenção. Além disso o sistema foi todo personalizado, com caixa rápido, impressão de etiquetas, qrcode e muitas outras coisas.',
  profile_src: '3273f478-a578-483f-aca4-837ff44711a8',
}

TestimonialCard2.propTypes = {
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_alt: PropTypes.string,
  quote: PropTypes.string,
  profile_src: PropTypes.string,
}

export default TestimonialCard2
