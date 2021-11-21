import { path } from '../../deps.ts';
import { IConfig } from '../common/mod.ts';

let config: IConfig;

export const getConfig = async (): Promise<IConfig> => {
  const appPath = window.APP_PATH;
  const configPathOfEnv = Deno.env.get('CF_CONFIG');
  const configPath = configPathOfEnv
    ? path.join('file://', configPathOfEnv)
    : path.join('file://', appPath, 'config.ts');
  config = config || (await import(configPath)).default;
  return config || undefined;
};
