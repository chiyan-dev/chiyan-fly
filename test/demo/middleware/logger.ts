import { Context } from 'https://static.x21.xyz/modules/chiyan/chiyan-fly/0.1.0/deps.ts';

export const middleware = async (ctx: Context, next: Function) => {
  console.log('before!');
  await next();
  console.log('after!');
};
