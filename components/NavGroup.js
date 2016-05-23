/* @flow */
import React, { PropTypes } from 'react'
import { View } from 'react-native';
import styles from '../styles'

function NavGroup({ style, children }: Object): React.Element {
  return (
    <View style={[styles.navGroup, style]}>
      {children}
    </View>
  )
}

NavGroup.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
}

NavGroup.defaultProps = {
  style: {},
}

export { NavGroup }
