import path from 'path';
import fs from 'fs';

export const capitalizeFirstLetter = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const patchSrcFile = (
  fileRoutes: any,
  imports: any,
  extensions: any
) => {
  const filePath = path.join(
    __dirname,
    '..',
    '..',
    'packages',
    'core',
    ...fileRoutes
  );
  let code = fs.readFileSync(filePath, 'utf8');
  if (imports && imports.length > 0) {
    code = `${imports.join('\n')}\n${code}`;
  }
  if (extensions) {
    code = code.replace(/^}/m, `\n  ${extensions}\n}`);
  }
  fs.writeFileSync(filePath, code);
};
