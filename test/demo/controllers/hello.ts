import { Context } from 'https://static.x21.xyz/modules/chiyan/chiyan-fly/0.1.0/deps.ts';

export const controller = {
  router: '/hello',
  get: (ctx: Context) => {
    ctx.response.body = 'Hello world';
  },
  post: (ctx: Context) => {
    ctx.response.body = 'Hello world';
  },
};
