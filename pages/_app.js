import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {},
        }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </Container>
        )
    }
}

export default MyApp
