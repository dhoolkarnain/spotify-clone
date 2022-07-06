import React from "react";
import "./LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

import Menu from "./MenuList/Menu";
import { MenuList } from "./MenuList/MenuList";
import MenuPlayList from "./MenuPlayList/MenuPlayList";
import TrackList from "./TrackList/TrackList";
// import PlayList from "./Playlist/Playlist";

export default function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} menuObject={MenuList} />
      <MenuPlayList />
      <TrackList />
    </div>
  );
}
