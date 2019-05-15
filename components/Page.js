import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Meta from './Meta'

const theme = {
    black: '#000000',
    white: '#ffffff',
    grey: '#6f6f6f',
    green: '#00664b',
    gutters: '30px',

    // media queries
    desktopxlarge: '1550px',
    desktoplarge: '1350px',
    desktop: '1025px',
    tablet: '1024px',
    mobile: '750px',
    mobilesmall: '321px',

    //  easing
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',

    // z-index
    zIndexSubcatList: '5',
    zIndexMenu: '10',
    zIndexInfo: '20',
    zIndexHeader: '30',
}

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        color: ${theme.black};
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1vw;
        color: ${theme.black};
        line-height: 1.35vw;
        text-align: center;
        letter-spacing: -0.01rem;
        font-family: sans-serif;
        font-weight: 200;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media (max-width: ${theme.tablet}) {
            font-size: 1.4rem;
            line-height: 1.4;
        }

        @media (max-width: ${theme.mobie}) and (orientation: landscape) {
            font-size: 1.1rem;
            line-height: 1.2;
        }
    }

    a {
        text-decoration: none;
        color: ${theme.green};
    }

    ul,p {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    p {
        margin-bottom: 1rem;
    }
`

const Inner = styled.div``

const Page = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Inner>
            <Meta />
            <GlobalStyle />
            {children}
        </Inner>
    </ThemeProvider>
)

export default Page
