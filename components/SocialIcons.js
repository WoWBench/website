import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

import { faPatreon, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Build social media links as icons using Font Awesome.
 * @see https://www.npmjs.com/package/@fortawesome/react-fontawesome
 */
export class SocialIcons extends React.Component {
  github() {
    let url = this.getSocialUrl('github');
    if (url) {
      return <a rel="author" href={url}><FontAwesomeIcon icon={faGithub} size="1x" /></a>;
    }
  }

  patreon () {
    let url = this.getSocialUrl('patreon');
    if (url) {
      return <a rel="author" href={url}><FontAwesomeIcon icon={faPatreon} size="1x" /></a>;
    }
  }

  /**
   * Return the url or false if prop not set.
   * @param network
   * @returns {*}
   */
  getSocialUrl(network) {
      if (typeof this.props[network] !== "undefined") {
        return this.props[network];
      }
      return false;
  }

  /**
   * Render the component.
   * @returns {*}
   */
  render () {
    return <>
      {this.github()}
      {this.patreon()}
    </>
  }
}