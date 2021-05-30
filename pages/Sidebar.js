import React, {useState} from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

const Sidebar = () => {
    const [Toggle, setToggle] = useState(true)
    const [collapse, setcollapse] = useState(true)
    const [onToggle, setonToggle] = useState(true)

    const ToggleHandler = (value) => {
        setToggle(value)
        setcollapse(value)
        setonToggle(value)
    }
  return (
    
    <ProSidebar
      collapsed={collapse}
      toggled={Toggle}
      breakPoint="md"
      onToggle={onToggle}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          sidebarTitle
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt />}
            suffix={<span className="badge red">new</span>}
          >
            dashboard
          </MenuItem>
          <MenuItem icon={<FaGem />}> components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
            
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={<span></span>}
            icon={<FaRegLaughWink />}
          >
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={"test"}
            icon={<FaHeart />}
          >
            <MenuItem>submenu 3</MenuItem>
            <MenuItem>submenu 1</MenuItem>
            <MenuItem>submenu 2</MenuItem>
          </SubMenu>
          <SubMenu title="multiLevel" icon={<FaList />}>
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title={`$submenu' 3`}>
              <MenuItem>submenu 3.1 </MenuItem>
              <MenuItem>submenu 3.2 </MenuItem>
              <SubMenu title={`$submenu 3.3`}>
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div>
            <button onClick={()=>ToggleHandler(true)}>OO</button>
            <button onClick={()=>ToggleHandler(false)}>XX</button>
        </div>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> viewSource' </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;