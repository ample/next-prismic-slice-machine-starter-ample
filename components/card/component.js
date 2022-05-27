// ---------------------------------------------------------

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { PrismicRichText } from '@prismicio/react'

// ---------------------------------------------------------

import Button from '@components/button'
import Image from '@components/image'
import Link from '@components/link'

// ---------------------------------------------------------

import {
  card,
  card_content,
  card_image,
  text_alignment_center,
  text_alignment_left,
  text_alignment_right,
  theme_default,
  theme_with_button,
} from './styles.module.scss'

const alignmentOptions = {
  center: text_alignment_center,
  left: text_alignment_left,
  right: text_alignment_right,
}

const variationOptions = {
  default: theme_default,
  withButton: theme_with_button,
}

// ---------------------------------------------------------

const Card = (props) => {
  let slice = props.slice ? props.slice.primary : props
  let { body, buttonLabel, heading, image, textAlignment, url } = slice

  // -------------------------------------------------------

  let variation = props.slice ? props.slice.variation : props.variation
  let button = buttonLabel && buttonLabel[0] ? buttonLabel[0].text : undefined

  // -------------------------------------------------------

  const classes = classNames(card, {
    [alignmentOptions[textAlignment]]: alignmentOptions[textAlignment],
    [variationOptions[variation]]: variationOptions[variation],
  })

  // -------------------------------------------------------

  let cardContents = (
    <>
      {image && (
        <Image
          alt={image.alt}
          className={card_image}
          layout="responsive"
          src={image.url}
          {...image.dimensions}
        />
      )}

      <div className={card_content}>
        {heading && <PrismicRichText field={heading} />}
        {body && <PrismicRichText field={body} />}
        {button && <Button>{button}</Button>}
      </div>
    </>
  )

  // -------------------------------------------------------

  let cardComponent = (
    <Link className={classes} url={url}>
      {cardContents}
    </Link>
  )

  if (url.link_type === 'Any') {
    cardComponent = <div className={classes}>{cardContents}</div>
  }

  return cardComponent
}

// ---------------------------------------------------------

Card.propTypes = {
  /**
   * Specifies the content that is displayed under the heading.
   */
  body: PropTypes.array,

  /**
   * Specifies the label of an optional button
   */
  buttonLabel: PropTypes.array,

  /**
   * Specifies the heading.
   */
  heading: PropTypes.array,

  /**
   * Specifies the image src, alt text, and dimensions.
   */
  image: PropTypes.object,

  /**
   * Specifies the alignment of the content.
   */
  textAlignment: PropTypes.oneOf(Object.keys(alignmentOptions)),

  /**
   * Specifies the url if the whole card is clickable.
   */
  url: PropTypes.object,

  /**
   * Specifies the theme variation.
   */
  variation: PropTypes.oneOf(Object.keys(variationOptions)),
}

Card.defaultProps = {
  textAlignment: 'left',
  url: null,
}

export default Card
