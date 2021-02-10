import React, { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Loading, Header, Player } from '../components';
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'
import Card from '../components/card';

export function BrowseContainer({ slides }) {

    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile, profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category]);

    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

    return profile.displayName ? (

        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                    <Loading.ReleaseBody />
                )}
            <Header id="other" src="batman2021" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Scranflix" />
                        <Header.TextLink>Home</Header.TextLink>
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                            </Header.TextLink>
                        <Header.TextLink>New & Popular</Header.TextLink>
                        <Header.TextLink>My List</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.TextLinkSmall>&#x25BC;</Header.TextLinkSmall>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureFiller></Header.FeatureFiller>
                    <Header.FeatureCallOut>
                        <Header.TitleLogo src={`/images/misc/scranmanWhite.png`}></Header.TitleLogo>
                    </Header.FeatureCallOut>
                    {/* <Header.Text>
                        Premise. In his second year
                        of fighting crime,
                        Scranman explores the corruption
                        that plagues Gotham City
                        and how it may tie to his own family,
                        in addition to coming into
                        conflict with a serial killer
                        known as the Riddler.
                    </Header.Text> */}
                    <Header.PlayButton> <Header.Unicode>&#9658;</Header.Unicode> Play</Header.PlayButton>
                    <Header.MoreInfoButton> <Header.Unicode>&#9432;</Header.Unicode> More Info</Header.MoreInfoButton>
                </Header.Feature>
                {/* <Header.Video id="video1" autoplay muted preload="none" src={'/videos/scranmanTrailer.mp4'} ></Header.Video> */}
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/atsley.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
        </>
    ) : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        );
} 