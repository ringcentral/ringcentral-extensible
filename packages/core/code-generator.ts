// eslint-disable-next-line node/no-unpublished-import
import generate from 'ringcentral-code-generator';

generate(process.env.SPEC_FILE_PATH!, __dirname);
