import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';

import {Footer} from 'components/Layout/Footer';
import {
    StyledContainer,
    Main,
    StyledHTML,
} from 'components/Layout/Container/styles';

interface ContainerProps {
    children: React.ReactNode;
    title?: string;
    date?: string;
}

export default function Container({children, ...customMeta}: ContainerProps) {
    const router = useRouter();
    const meta = {
        title: 'Lucas Carl',
        description: `Frontend-Entwickler - benutzerfreundliche und moderne Webseiten - Referenzen und Portfolio`,
        image: 'https://www.lucascarl.com/assets/images/Thumbnail.png',
        type: 'website',
        ...customMeta,
    };

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://lucascarl.com${router.asPath}`}
                />
                <link rel="canonical" href={`https://lucascarl.com${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Lucas Carl" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:image:alt" content={meta.title} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            {mounted && (
                <StyledContainer>
                    <StyledHTML />
                    <Main>
                        {children}
                    </Main>
                    <Footer />
                </StyledContainer>
            )}
        </>
    );
}
