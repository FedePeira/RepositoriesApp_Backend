import Router from 'koa-router';

import repositories from './repositories';

const router = new Router();

router.use('/repositories', repositories.routes());

router.get('/', async (ctx) => {
  ctx.body = 'Bienvenido a la API';
});

export default router;
