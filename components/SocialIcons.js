import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

import { faPatreon, faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Build social media links as icons using Font Awesome.
 * @see https://www.npmjs.com/package/@fortawesome/react-fontawesome
 */
export class SocialIcons extends React.Component {
  renderPatreon () {
    if (typeof this.props.patreon !== "undefined") {
      let patreonUrl = this.props.patreon;

      return <a rel="author" href={patreonUrl}><FontAwesomeIcon icon={faPatreon} size="1x" /></a>;
    }
  }

  render () {
    let patreon = this.renderPatreon();

    return <>
      {patreon}
    </>
  }
}