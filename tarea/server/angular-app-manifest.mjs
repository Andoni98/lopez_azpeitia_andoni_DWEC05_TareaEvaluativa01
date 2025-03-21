
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Andoni98.github.io/lopez_azpeitia_andoni_DWEC05_TareaEvaluativa01/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lopez_azpeitia_andoni_DWEC05_TareaEvaluativa01"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 562, hash: '6100d98fd93fb830d529708289b06b9097b7910d5dbdb075b5edbec22170dba1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'c929ddb2ad484ff0cb46732dd980bbe39831b250c57cda24cbd45c42bf69b725', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3952, hash: 'f583eb885cb39290c50ab73f967fb155a4632809502a788b438cfc0d2ea9094a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
