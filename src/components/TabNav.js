import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const Nav = props => (
	<NavLink exact {...props} activeClassName="active"/>);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home Page")
const characterLabel = createLabel("users", "Characters")
const episodesLabel = createLabel("video", "Episodes")
const locationLabel = createLabel("map outline", "Location")



const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters/`} content={characterLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes/`} content={episodesLabel} /> },
  { menuItem: <Menu.Item key='location' as={Nav} to={`/locations/`} content={locationLabel} /> }
]



const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav