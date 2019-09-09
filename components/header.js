import React from 'react';
import Head from 'next/head';

const Header = ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      :global(body) {
        margin: 0;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      .Button {
        background: #00FFFF;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        padding: 16px 24px;
        position: relative;
        outline: none;
        min-width: 150px;
        overflow: hidden;
      }
      .Button::before {
        content: '';
        background: linear-gradient(90deg, #FFC0CB 25%, #00FFFF 100%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        transform: translate3d(-100%, 0, 0);
      }
      .Button-inner {
        align-items: center;
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 0;
        justify-content: center;
      }
      .Button-inner span {
        font-weight: bold;
        padding: 0 8px;
        text-transform: uppercase;
      }
      .Button.is-loading::before {
        animation: loading 1s ease-in-out infinite;
      }
      .Button:hover::before {
        transform: translate3d(0%, 0, 0);
      }
      .Error {
        color: #262626;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
      .Heading {
        color: #262626;
        font-size: 5rem;
        letter-spacing: 1.5px;
        margin: 0;
        line-height: 1;
        text-transform: uppercase;
      }
      .Game-player {
        align-items: center;
        display: flex;
        position: absolute;
        padding: 16px 0;
        letter-spacing: 1.5px;
        line-height: 1;
        text-transform: uppercase;
        top: 0px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }
      .Game-player img,
      .Game-player svg {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .Subheading {
        color: #262626;
        letter-spacing: 1.5px;
        margin: 0 0 2rem;
        line-height: 1;
        text-transform: uppercase;
      }
      .Selections {
        max-width: 90%;
      }
      .Selection {
        cursor: pointer;
      }
      .Selection svg {
        transition: all 0.2s ease;
      }
      .Selection:hover svg {
        padding: 0 24px;
        transform: rotate(-5deg) scale(1.25);
      }
      .Toast {
        background: rgba(255, 255, 255, 0.90);
        box-shadow: 0 4px 8px -4px rgba(0,0,0,0.5);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 16px 24px;
        width: 60%;
        max-width: 400px;
        position: fixed;
        z-index: 999;
        bottom: 0px;
        left: 50%;
        opacity: 1;
        transform: translate3d(-50%, 100%, 0);
        transition: all 0.3s ease;
      }
      .Toast p {
        margin: 0;
      }
      .Toast span {
        cursor: pointer;
      }
      .Toast.u-show {
        animation: popup 0.3s ease-in-out;
        bottom: 32px;
        opacity: 1;
        transform: translate3d(-50%, 0%, 0);
      }

      @media (min-width: 320px) and (max-width: 480px) {
        .Game-player {
          top: 50%;
          left: 16px;
          transform-origin: center;
          transform: translate3d(-45%, -50%, 0) rotate(-90deg);
        }
        .Selections {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 80%;
        }
        .Selection {
          transform: none;
        }
      }

      @keyframes loading {
        0% { transform: translate3d(-100%, 0, 0); }
        100% { transform: translate3d(100%, 0, 0); }
      }
      @keyframes popup {
        0% { transform: translate3d(-50%, 100%, 0) }
        50% { transform: translate3d(-50%, -30%, 0); }
        100% { transform: translate3d(-50%, 0%, 0); }
      }
    `}</style>
  </>
)

export default Header
