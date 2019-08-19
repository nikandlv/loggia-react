import App from 'next/app'
import React from 'react'
import dynamic from 'next/dynamic';

const ReduxProvider =dynamic(import ('../data/ReduxProvider'),{ssr:false});
export default class Loggia extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    )
  }
}