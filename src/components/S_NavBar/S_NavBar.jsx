// import './S_NavBar.scss'
import React from 'react'

import O_SearchBar from '../O_SearchBar/O_SearchBar.jsx'
import { getPostTeasers } from '../../search-vanilla-data.js'
import A_menubutton_default from '../A_menubutton_default/A_menubutton_default.jsx'

export default class S_NavBar extends React.Component {
  constructor(props) {
    super(props);

    const searchInputValue = props.prerender ? "" : props.searchInputValue;

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue,
    };
  }

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data,
      });
    });
  }

  // вынести функцию в утилиты
  getPathFromUrl = (url) => {
    return url.split(addressPart)[0];
  };

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true;

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false;
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue,
    });
  };

  handleSearchSubmit = () => {
    const { prerender, homeURL } = this.props;
    const { searchInputValue } = this.state;

    if (prerender == undefined) {
      if (searchInputValue.length >= 3) {
        window.location.href =
          homeURL + "search.html?request=" + searchInputValue;
      }
    }
  };

  render() {
    // console.log(Array.isArray([]));

    const { prerender, homeURL, menu } = this.props;
    const { isSearchButtonDisabled, searchInputValue, postTeasers } =
      this.state;
    const currentURL = prerender == undefined ? window.location.href : "";
    const menuElements = [];

    menu.forEach((menuItem, i) => {
      const { text, url } = menuItem;
      const linkURL = homeURL + url;

      menuElements.push(
        <A_menubutton_default
          text={text}
          type="mainMenuItem"
          current={linkURL == currentURL}
          url={linkURL}
          key={i}
        />
      );
    });

    return (
    <>
        <div className="W_SimpleNavBar">
            <a className="A_little_logo" href={homeURL}></a>
            <div className="W_NavBar">
                {menuElements}
                <a className="Q_burgerMenu" href="burger.html"></a>
                <O_SearchBar 
                    searchInputValue={searchInputValue}
                    isSearchButtonDisabled={isSearchButtonDisabled}
                    postTeasers={postTeasers}
                    handleSearchInput={this.handleSearchInput}
                    handleSearchSubmit={this.handleSearchSubmit}
                />
            </div>
        </div>
    </>
    ) ;
  }
}
