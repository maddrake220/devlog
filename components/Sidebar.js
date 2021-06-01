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
import { FaToggleOff, FaToggleOn, FaHome,  FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {

    const toggleHandler = (value) => {
        settoggle(value)
        setcollapse(value)
        settoggleB(value)
    }
    const [toggle, settoggle] = useState(true)
    const [collapse, setcollapse] = useState(true)
    const [toggleB, settoggleB] = useState(true)

  return (
    
    <ProSidebar
      collapsed={collapse}
      toggled={toggle}
      breakPoint="md"
      onToggle={toggleB}
    >
      <SidebarHeader >
        <div
          style={{
            padding: '20px 28px'
          }}
        >
            {toggle ?  <FaToggleOff onClick={()=>toggleHandler(false)}/>
                    :  <FaToggleOn onClick={()=>toggleHandler(true)}/>
                    }
          
        </div>
      </SidebarHeader>

      <SidebarContent>
        
        <Menu iconShape="circle">
            <MenuItem
                icon={<FaHome/>}
                >
                    <Link href="/"> 
                    <a>
                        홈
                    </a>
                    </Link>
                </MenuItem>
        </Menu>

        <Menu iconShape="circle">
          
          <MenuItem icon={<FaHeart />}
          suffix={<span className="badge red">new</span>}>
              <Link href="/posts"> 
                  <a>
                     포스트
                  </a>
              </Link>
          </MenuItem>
          <MenuItem icon={<FaGem />}>프로젝트</MenuItem>
          <MenuItem icon={<FaRegLaughWink />}>소개</MenuItem>
        </Menu>

        <Menu iconShape="circle">
          
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 28px',
            overflow: 'hidden'
          }}
        >
          <a
            href="https://github.com/maddrake220"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;