import React, { createContext, useState, useContext } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Background,
    Picture,
    Profile,
    Dropdown,
    PlayButton,
    MoreInfoButton,
    ButtonLink,
    Group,
    Logo,
    Container,
    Feature,
    Unicode,
    FeatureFiller,
    Text,
    Search,
    SearchIcon,
    SearchInput,
    Link,
    TextLinkSmall,
    FeatureCallOut
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {

    return (
        bg ? <Background {...restProps}>
            {children}
        </Background> : children
    );
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {

    return <Feature {...restProps}>{children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restProps }) {

    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.TextLinkSmall = function HeaderTextLinkSmall({ children, ...restProps }) {
    return <TextLinkSmall {...restProps}>{children}</TextLinkSmall>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps} >
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
            />
        </Search>
    )

};

Header.FeatureCallOut = function HeaderFeatureCallout({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    const [navbar, setNavbar] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }

    }

    window.addEventListener('scroll', changeNav);
    return <Container
        active={navbar}
        {...restProps}>{children}</Container>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
};

Header.MoreInfoButton = function HeaderMoreInfoButton({ children, ...restProps }) {
    return <MoreInfoButton {...restProps}>{children}</MoreInfoButton>
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.FeatureFiller = function HeaderFeatureFiller({ children, ...restProps }) {
    return <FeatureFiller {...restProps}>{children}</FeatureFiller>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile>{children}</Profile>;
};

Header.Unicode = function HeaderUnicode({ children, ...restProps }) {
    return <Unicode>{children}</Unicode>;
};

Header.TextLinkSmall = function HeaderTextLinkSmall({ children, ...restProps }) {
    return <TextLinkSmall>{children}</TextLinkSmall>;
};