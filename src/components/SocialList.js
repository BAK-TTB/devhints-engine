// @flow
import React from 'react'

export type Props = {
  className?: string,

  // Typically not passed, but you can
  url?: string,

  // Page description; not available for home page
  description?: string
}

/**
 * List of social media links (Facebook, Twitter).
 *
 * @example
 *     <SocialList
 *       description='Vim' />
 */

export const SocialList = ({ className, url, description }: Props) => {
  const e = encodeURIComponent

  if (!url) {
    // There's very little sense to show this component in a server
    // side rendering.
    if (typeof window === 'undefined') return null
    url = window.location.href
  }

  if (!description) description = 'The ultimate search tool'

  const tweetText = `${description} ${url}`

  const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`
  const twitterURL = `https://www.twitter.com/intent/tweet?text=${e(tweetText)}`

  return (
    <ul className={`social-list ${className || ''}`}>
      <li className='facebook link hint--bottom' data-hint='Share on Facebook'>
        <a href={facebookURL} target='share'>
          <span className='text'>F</span>
        </a>
      </li>
      <li className='twitter link hint--bottom' data-hint='Share on Twitter'>
        <a href={twitterURL} target='share'>
          <span className='text'>T</span>
        </a>
      </li>
    </ul>
  )
}

export default SocialList