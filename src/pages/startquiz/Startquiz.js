import React from 'react';
import {
    Helmet
} from 'react-helmet';
import {
    StartQuizContainer,
    ContentWrap,
    StartBtn,
    PlayIcon
} from './Startquiz.elements';
import { PageTitle } from '../../app/components';

export const Startquiz = () => {
    return (
    <>
        <Helmet> 
            <meta charSet="utf-8" />
            <title> Qserv quiz | Start Quiz </title>
            <meta name="description" content="Quiz app home page" />
        </Helmet>
        <StartQuizContainer>
            <PageTitle title="Scrum Certification test" />
            <ContentWrap>
                <p>Check out your Example Scrum Certification Test Questions which are very similar to the Test Questions of your Scrum Master Accredited Certification&trade;, Scrum Product Owner Acceredited Certification&trade; Programs.</p>
                <StartBtn to="/quiz"><PlayIcon /><span>Başlat</span></StartBtn>
            </ContentWrap>
        </StartQuizContainer>
    </>
    )
}