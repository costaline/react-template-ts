import * as vars from '@@/assets/styles/export-vars-to-js.module.scss';

export const getVariableFromSass = (variable: string): string => {
  if (!Object.prototype.hasOwnProperty.call(vars, variable)) {
    // eslint-disable-next-line no-console
    console.warn(`Variable "${variable}" not found`);

    return '';
  }

  return (vars as unknown as Record<string, string>)[variable];
};
