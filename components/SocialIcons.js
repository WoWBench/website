import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarItem } from './bulma-react/Navbar/Item';

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
      return <NavbarItem url={url} target="_blank">
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </NavbarItem>;
    }
  }

  patreon () {
    let url = this.getSocialUrl('patreon');
    if (url) {
      return <NavbarItem url={url} target="_blank">
        <FontAwesomeIcon icon={faPatreon} size="1x" />
      </NavbarItem>;
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