import React from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <section>
          Fish Academy
        </section>
      </div>
    )
  }
}

export default Header
