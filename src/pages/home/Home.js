import React from 'react';
import {
    Helmet
} from 'react-helmet';
import {
    HomeContainer,
    ContentWrap,
    StartBtn,
    PlayIcon
} from './Home.elements';
import { PageTitle } from '../../app/components';

export const Home = () => {
    return (
    <>
        <Helmet> 
            <meta charSet="utf-8" />
            <title> Qserv quiz | Home </title>
            <meta name="description" content="Quiz app home page" />
        </Helmet>
        <HomeContainer>
            <PageTitle title="Scrum Certification test" />
            <ContentWrap>
                <p>Check out your Example Scrum Certification Test Questions which are very similar to the Test Questions of your Scrum Master Accredited Certification&trade;, Scrum Product Owner Acceredited Certification&trade;, Scrum Team Member Accredited Certification&trade;, Scrum Coach Accredited Certification&trade;, Scrum Trainer Accredited Certification&trade;, Scaled Scrum Expert Accredited Certification&trade;, Scrum Certification for Java Developer&trade;, Scrum Certification for Web Developer&trade;, and Scrum Certification for Mobile App Developer&trade; Programs.</p>
                <StartBtn to="/start-quiz"><PlayIcon /><span>Başlat</span></StartBtn>
            </ContentWrap>
        </HomeContainer>
    </>
    )
}