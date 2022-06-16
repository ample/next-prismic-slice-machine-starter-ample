// ---------------------------------------------------------

import NextImage from 'next/image'
import PropTypes from 'prop-types'

// ---------------------------------------------------------

import { defaultAltAttribute } from '../component'

// ---------------------------------------------------------

const Image = (props) => {
  if (!props.src) return null

  // -------------------------------------------------------

  let {
    alt,
    className,
    height,
    layout,
    objectFit,
    objectPosition,
    placeholder,
    priority,
    quality,
    src,
    width,
  } = props

  // -------------------------------------------------------

  return (
    <div className={className}>
      <NextImage
        alt={alt || defaultAltAttribute(src) || ' '}
        blurDataURL={`${src}?fit=fill&w=10&h=10`}
        height={height}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        placeholder={placeholder ? placeholder : false}
        priority={priority ? priority : true}
        quality={quality}
        src={src}
        width={width}
      />
    </div>
  )
}

Image.propTypes = {
  /**
   * Specifies the image alt text.
   */
  alt: PropTypes.string,

  /**
   * Specifies a CSS class on either the image or the wrapping element when an SVG is rendered.
   */
  className: PropTypes.string,

  /**
   * Specifies the height of the image.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies the behavior of the image as the viewport changes size.
   */
  layout: PropTypes.oneOf(['fill', 'fixed', 'intrinsic', 'responsive']),

  /**
   * Specifies how the image is positioned within its parent element when using layout="fill"
   */
  objectFit: PropTypes.oneOf([
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down',
  ]),

  /**
   * Specifies how the image is positioned within its parent element when using layout="fill".
   */
  objectPosition: PropTypes.string,

  /**
   * Specifies if a placeholder should be enabled while image loads.
   */
  placeholder: PropTypes.bool,

  /**
   * Specifies if the image should be considered high priority and preloaded.
   */
  priority: PropTypes.bool,

  /**
   * Specifies the quality of the optimized image, defaults to 75.
   */
  quality: PropTypes.number,

  /**
   * Specifies the image src.
   */
  src: PropTypes.string.isRequired,

  /**
   * Specifies the width of the image.
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Image.defaultProps = {}

export default Image
