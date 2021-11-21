import {
  Context,
  Controller,
} from 'https://static.x21.xyz/modules/chiyan/chiyan-fly/0.1.0/mod.ts';

export const controller: Controller = {
  router: '/',
  get: (ctx: Context) => {
    ctx.response.body = 'Hello word!';
  },
};
