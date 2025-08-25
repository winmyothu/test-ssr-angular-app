import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'about',
    renderMode: RenderMode.Client   // 🚀 CSR only
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender  // everything else SSR/prerender
  }
];
