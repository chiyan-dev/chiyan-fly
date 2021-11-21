import { Context } from 'https://static.x21.xyz/modules/chiyan/chiyan-fly/0.1.0/deps.ts';

export const controller = {
  router: '/',
  get: (ctx: Context) => {
    ctx.response.body = 'index page';
  },
};
