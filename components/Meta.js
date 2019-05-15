import React, { Component } from 'react'
import Head from 'next/head'

class Meta extends Component {
    render() {
        return (
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/static/manifest.json" />
                <title>Whilde Boilerplate - Static Build</title>
            </Head>
        )
    }
}
export default Meta
