import { path } from '../../deps.ts';
import { Config } from '../common/mod.ts';

let config: Config;

export const getConfig = async (): Promise<Config> => {
  const appPath = window.APP_PATH;
  const configPathOfEnv = Deno.env.get('CF_CONFIG');
  const configPath = configPathOfEnv
    ? path.join('file://', configPathOfEnv)
    : path.join('file://', appPath, 'config.ts');
  config = config || (await import(configPath)).default;
  return config || undefined;
};
