import Head from 'next/head'
import Footer from '../footer/footer'
import ProgressBar from '../progress-bar/Progress-bar'
import NavBar from '../nav-bar/Navbar'
import React from 'react'

export default ({ children }) => {
  return (
    <div>
      {/*language=CSS*/}
      <style jsx global>{`
        /* Normalize start */
        /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

        /* Document
   ========================================================================== */

        /**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

        html {
          line-height: 1.15; /* 1 */
          -webkit-text-size-adjust: 100%; /* 2 */
        }

        /* Sections
   ========================================================================== */

        /**
 * Remove the margin in all browsers.
 */

        body {
          margin: 0;
        }

        /**
 * Render the \`main\` element consistently in IE.
 */

        main {
          display: block;
        }

        /**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }

        /* Grouping content
   ========================================================================== */

        /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

        hr {
          box-sizing: content-box; /* 1 */
          height: 0; /* 1 */
          overflow: visible; /* 2 */
        }

        /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

        pre {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        /* Text-level semantics
   ========================================================================== */

        /**
 * Remove the gray background on active links in IE 10.
 */

        a {
          background-color: transparent;
        }

        /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

        abbr[title] {
          border-bottom: none; /* 1 */
          text-decoration: underline; /* 2 */
        }

        /**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

        b,
        strong {
          font-weight: bolder;
        }

        /**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

        code,
        kbd,
        samp {
          font-family: monospace, monospace; /* 1 */
          font-size: 1em; /* 2 */
        }

        /**
 * Add the correct font size in all browsers.
 */

        small {
          font-size: 80%;
        }

        /**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        /* Embedded content
   ========================================================================== */

        /**
 * Remove the border on images inside links in IE 10.
 */

        img {
          border-style: none;
        }

        /* Forms
   ========================================================================== */

        /**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit; /* 1 */
          font-size: 100%; /* 1 */
          line-height: 1.15; /* 1 */
          margin: 0; /* 2 */
        }

        /**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

        button,
        input {
          /* 1 */
          overflow: visible;
        }

        /**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

        button,
        select {
          /* 1 */
          text-transform: none;
        }

        /**
 * Correct the inability to style clickable types in iOS and Safari.
 */

        button,
        [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }

        /**
 * Remove the inner border and padding in Firefox.
 */

        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }

        /**
 * Restore the focus styles unset by the previous rule.
 */

        button:-moz-focusring,
        [type='button']:-moz-focusring,
        [type='reset']:-moz-focusring,
        [type='submit']:-moz-focusring {
          outline: 1px dotted ButtonText;
        }

        /**
 * Correct the padding in Firefox.
 */

        fieldset {
          padding: 0.35em 0.75em 0.625em;
        }

        /**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

        legend {
          box-sizing: border-box; /* 1 */
          color: inherit; /* 2 */
          display: table; /* 1 */
          max-width: 100%; /* 1 */
          padding: 0; /* 3 */
          white-space: normal; /* 1 */
        }

        /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

        progress {
          vertical-align: baseline;
        }

        /**
 * Remove the default vertical scrollbar in IE 10+.
 */

        textarea {
          overflow: auto;
        }

        /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

        [type='checkbox'],
        [type='radio'] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
        }

        /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

        [type='search'] {
          -webkit-appearance: textfield; /* 1 */
          outline-offset: -2px; /* 2 */
        }

        /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        /**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

        ::-webkit-file-upload-button {
          -webkit-appearance: button; /* 1 */
          font: inherit; /* 2 */
        }

        /* Interactive
   ========================================================================== */

        /*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

        details {
          display: block;
        }

        /*
 * Add the correct display in all browsers.
 */

        summary {
          display: list-item;
        }

        /* Misc
   ========================================================================== */

        /**
 * Add the correct display in IE 10+.
 */

        template {
          display: none;
        }

        /**
 * Add the correct display in IE 10.
 */

        [hidden] {
          display: none;
        }

        /* Normalize end */
        @import url('https://fonts.googleapis.com/css?family=Space+Mono|Work+Sans');

        body {
          font-size: 1.2rem;
          line-height: 1.6rem;
          // font-family: 'Source Sans Pro', sans-serif;
          font-family: 'Work Sans', sans-serif;
          margin: 0;
          color: #111;
          background-color: #fff !important;
          overflow-x: hidden;
        }

        img {
          max-width: 100%;
        }

        a {
          color: #111;
          word-break: break-all;
        }

        * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #293a7d;
          font-family: 'Space Mono', monospace;
          letter-spacing: 0.2px;
        }

        h1 {
          font-size: 40px;
          line-height: 50px;
          font-weight: 400;
        }

        h2 {
          letter-spacing: 0.2px;
          text-align: center;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          h1,
          h2 {
            font-size: 24px;
          }
        }

        p {
          font-family: 'Work Sans', sans-serif;
          font-size: 18px;
          line-height: 1.8rem;
        }

        .hyf-title {
          border-bottom: 1px solid #fdf4b4;
          box-shadow: inset 0 -6px 0 #fdf4b4;
        }

        .hyf-title > a {
          text-decoration: none;
        }
      `}</style>
      <Head>
        <title>HackYourFuture Copenhagen</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta
          name='description'
          content='HackYourFuture Refugee Coding School In Copenhagen'
        />
        <meta
          name='keywords'
          content='HackYourFuture, copenhagen, denmark, coding, school, dk, programming'
        />
        <meta
          name='og:title'
          content='HackYourFuture Refugee Coding School In Copenhagen'
        />
        <meta
          name='og:description'
          content='HackYourFuture Refugee Coding School In Copenhagen'
        />
        <meta name='og:image' content='/static/logo_black.svg' />
        <meta name='og:url' content='http://hackyourfuture.dk/' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@hyf' />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/static/favicon.ico'
        />
      </Head>

      <link
        href='https://fonts.googleapis.com/css?family=Source+Sans+Pro'
        rel='stylesheet'
      />
      <ProgressBar />
      <NavBar />
      {children}
      <Footer />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-117911945-1');
          `
        }}
      />
    </div>
  )
}
