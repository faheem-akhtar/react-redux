import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const ButtonStyle = props => (`
  border: none;
  padding: .6em 2.5em;
  font-size: 1em;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props.theme.colors.secondary()};
  background-color: ${props.theme.colors.secondaryBg()};
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.11);
  border-radius: 100px;
  text-decoration: none;
  transition: border-color 200ms linear, background-color 200ms linear, color 200ms linear;
  &:hover {
    background-color: #FFF;
  }
  ${props.dark && `
    color: ${props.theme.colors.primary(0.5)};
    background-color: transparent !important;
    border: 1px solid ${props.theme.colors.primary(0.3)};
    &:hover {
      border-color: #FFF;
      color: #FFF;
    }
  `}
`)

const SimpleButtonStyle = props => (`
  color: ${props.theme.colors.secondary()};
  text-decoration: none;
  text-transform: uppercase;
  ${props.dark && `
    color: ${props.theme.colors.primary(0.5)};
    &:hover {
      border-color: #FFF;
      color: #FFF;
    }
  `}
`)

const Button = styled.button`
  ${props => ButtonStyle(props)}
`
export default Button

export const ButtonsWrapper = styled.div`
  margin-top: 20px;
`

const RouterLinkComponent = ({ children, ...rest }) => {
  return <Link {..._.omit(rest, ['dark'])}>{children}</Link>
}
export const RouterLink = styled(RouterLinkComponent)`
  display: inline-block;
  ${props => ButtonStyle(props)}
`

const SimpleLinkComponent = ({ children, ...rest }) => {
  return <Link {..._.omit(rest, ['dark'])}>{children}</Link>
}
export const SimpleLink = styled(SimpleLinkComponent)`
  display: inline-block;
  ${props => SimpleButtonStyle(props)}
`

export const SimpleAnchor = SimpleLink.withComponent('a')
