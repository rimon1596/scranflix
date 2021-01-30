import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Loading, Header } from '../components';
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'

export function BrowseContainer({ slides }) {

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (

        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                    <Loading.ReleaseBody />
                )}
            <Header src="batman2021">
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Scranflix" />
                </Header.Frame>
            </Header>
        </>
    ) : (
            <SelectProfileContainer user={user} setProfile={setProfile} />
        );
} 