import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import './index.scss'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  return (
    <nav>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <a href='/'>
              <img src="assets/images/arent-logo.png" alt="arent-logo"/>
            </a>
          </div>
          <div className="header__menu">
            <ul>
              <li>
                <a href="/my-record">
                  <img src="assets/images/note-icon.png" alt="note-icon" width="32px" height="32px"/>
                  <p className="header__navigation-label">
                    自分の記録
                  </p>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="assets/images/challenge-icon.png" alt="challenge-icon" width="32px" height="32px"/>
                  <p className="header__navigation-label">
                    チャレンジ
                  </p>
                </a>
              </li>
              <li>
                <a>
                  <img src="assets/images/info-icon.png" alt="info-icon" width="25px" height="28px"/>
                  <p className="header__navigation-label">
                    お知らせ
                  </p>
                </a>
              </li>
            </ul>
            <div className="header__settings" onClick={menuClick}>
              {!open && <img src="assets/images/menu-icon.png" alt="menu-icon" width="32px" height="32px"/>}
              {open && <img src="assets/images/close-icon.png" alt="close-icon" width="32px" height="32px"/>}
            </div>
          </div>
        </div>
      </div>
      {MyMenu(anchorEl, open, handleClose)}
    </nav>
  )
}

const MyMenu = (anchorEl, open, handleClose) => {
  return (
    <Menu
        anchorEl={anchorEl}
        id="menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <a href="/my-record">
          <MenuItem>
              自分の記録
          </MenuItem>
        </a>
        <MenuItem>
          体重グラフ
        </MenuItem>
        <MenuItem>
          目標
        </MenuItem>
        <MenuItem>
          選択中のコース
        </MenuItem>
        <a href="/column">
          <MenuItem>
              コラム一覧
          </MenuItem>
        </a>
        <MenuItem>
          設定
        </MenuItem>
      </Menu>
  )
}

export default Header