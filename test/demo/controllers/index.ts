import {
  Context,
  Controller,
} from '../../../mod.ts';

export const controller: Controller = {
  router: '/',
  get: (ctx: Context) => {
    ctx.response.body = 'Hello word!';
  },
};
