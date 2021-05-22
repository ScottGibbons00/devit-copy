import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FiChevronsLeft, FiPlusSquare } from 'react-icons/fi';
import { VscProject } from 'react-icons/vsc';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { toggleSidebar } from '../store/actions/index';
import { selectSidebarIsCollapsed } from '../store/selectors';

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarIsCollapsed = useSelector(selectSidebarIsCollapsed);

  const toggleCollapsed = () => dispatch(toggleSidebar());

  return (
    <nav className={`sidebar ${sidebarIsCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar__nav-links">
        <SidebarLink route="/projects" label="My Projects" leftIcon={<VscProject />} iconClass="project-icon" />
        <SidebarLink route="/find-a-project" label="Find a Project" leftIcon={<AiOutlineFileSearch />} iconClass="find-icon" />
        <SidebarLink route="/new-idea" label="New Idea" leftIcon={<FiPlusSquare />} iconClass="new-idea-icon" />
      </div>
      <div role="button" tabIndex="0" className="sidebar__expand-collapse" onClick={toggleCollapsed}>
        <h4 className="sidebar__nav-link-label collapse-label">Collapse</h4>
        <span className="icon md"><FiChevronsLeft /></span>
      </div>
    </nav>
  );
};

export default Sidebar;

const SidebarLink = ({
  route, label, leftIcon, iconClass,
}) => {
  return (
    <NavLink to={route} className="sidebar__nav-link">
      <span className={`icon ${iconClass} md`}>{leftIcon}</span>
      <h3 className="sidebar__nav-link-label">{label}</h3>
    </NavLink>
  );
};