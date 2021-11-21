import { Context, CorsOptions } from '../../deps.ts';

export interface ICtrl {
  router: string;
  get?: (ctx: Context) => void;
  post?: (ctx: Context) => void;
  put?: (ctx: Context) => void;
  delete?: (ctx: Context) => void;
  head?: (ctx: Context) => void;
  options?: (ctx: Context) => void;
  patch?: (ctx: Context) => void;
  all?: (ctx: Context) => void;
}

export interface IConfig {
  port?: number;
  corsOptions?: CorsOptions;
}

export * from '../../deps.ts';
