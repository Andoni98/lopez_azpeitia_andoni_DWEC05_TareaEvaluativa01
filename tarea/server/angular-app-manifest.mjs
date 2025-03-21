
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://andoni98.github.io/lopez_azpeitia_andoni_DWEC05_TareaEvaluativa01/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lopez_azpeitia_andoni_DWEC05_TareaEvaluativa01"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 562, hash: '19df63350457d19b3888dce81377723a56064d412093bfd42fcbe6688d8c1c87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: 'f867d9da89a22e959543887638d496a3a4466a491a70f54a9f78a6acff1b4d10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3952, hash: '86aab5d9672c1fa957921d7152c370ddce96624f54ee57c603d1b67c968dd7db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
