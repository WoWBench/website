import React, { Fragment } from 'react';
import { Navbar } from './bulma-react/Navbar';
import { Column, Columns } from './bulma-react/Columns';
import { SocialIcons } from './SocialIcons'

export class App extends React.Component {
  hasSidebar () {
    return (typeof this.props.sidebar !== "undefined") || this.isPage('index')
  }

  isPage (p) {
    return (typeof this.props.page !== "undefined") && this.props.page === p
  }

  sidebarHomepageContent () {
    if (this.isPage('index')) {
      return (
        <>
        </>
      )
    }
    return ''
  }

  sidebarContent () {
    let homeSidebarContent;
    const isIndex = this.isPage('index');
    if (isIndex) {
      homeSidebarContent = this.sidebarHomepageContent()
    }

    if (this.hasSidebar() || isIndex) {

      let sidebar

      if (typeof this.props.sidebar !== "undefined") {
        sidebar = this.props.sidebar
      }

      return <Column classes={['is-one-third']}>{homeSidebarContent}{sidebar}</Column>
    }
    return ''
  }

  render () {
    const sidebar = this.sidebarContent()
    const socialIcons = <SocialIcons patreon="https://www.patreon.com/wowbench" />;

    return (
      <>
        <h1 className="html5outline">WoWBench</h1>
        <section>
          <h1 className="html5outline">Navigation</h1>
          <Navbar brand="WoWBench" navbarEnd={socialIcons} />
        </section>
        <section className="app">
          <div className="container">
            <div className="content">
              <Columns>
                <Column>
                  {this.props.children}
                </Column>
                {sidebar}
              </Columns>
            </div>
          </div>
        </section>
      </>
    )
  }
}
