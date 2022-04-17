// eslint-disable-next-line import/no-extraneous-dependencies
import generate from 'ringcentral-code-generator';
import path from 'path';

generate(process.env.SPEC_FILE_PATH!, path.join(__dirname, 'src'));
