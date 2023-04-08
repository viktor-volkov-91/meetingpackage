import * as path from 'path';

import type { GenerateApiParams } from 'swagger-typescript-api';
import { generateApi as generateApiLib } from 'swagger-typescript-api';

export const generateApi = (params: GenerateApiParams) =>
    generateApiLib({
      ...params,
      templates: path.resolve(__dirname, './templates'),
    });

const input = process.argv[2] || path.resolve(__dirname, '../../../apps/api/', './open-api.json');
console.log('Input file path:', input);

generateApi({
  input,
  name: 'generated-api.ts',
  httpClientType: 'axios',
  output: path.resolve(__dirname, '../src/api'),
});
