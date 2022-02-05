/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import { renderToString, RenderToStringOptions, QwikLoader } from '@builder.io/qwik/server';
import { Root } from './root';

/**
 * Entry point for server-side pre-rendering.
 *
 * @returns a promise when all of the rendering is completed.
 */
export function render(opts: RenderToStringOptions) {
  return renderToString(
    <html>
      <head>
        <title>Qwik + Partytown Blank App</title>
        <script defer async src="/~partytown/debug/partytown.js"></script>
      </head>
      <body q:base="/build/">
        <Root />
        <script type="text/partytown">
          ({partyTownExampleWhichBlocksMainThreadForOneSecond.toString()})()
        </script>
        <QwikLoader debug={opts.debug} events={['click', 'keyup', 'expensiveComputationDone']} />
      </body>
    </html>,
    opts
  );
}

function partyTownExampleWhichBlocksMainThreadForOneSecond() {
  // Block execution for 1 second.
  const start = new Date().getTime();
  // eslint-disable-next-line no-console
  console.log('Expensive computation started at:', start);
  let end = 0;
  while (end < start + 2500) {
    end = new Date().getTime();
  }
  // eslint-disable-next-line no-console
  console.log('Expensive computation ended at:', end);
  document.dispatchEvent(new Event('expensiveComputationDone', { bubbles: true }));
}