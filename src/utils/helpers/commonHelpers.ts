import { equals, omit } from 'ramda';

declare global {
  interface Window { debounceState: any; }
}

window.debounceState = window.debounceState || { };

type TObject = {
    [key: string]: number | string | boolean | null | undefined,
}

const checkValuesBeforeRequest = (
  initialValues: TObject,
  currentValues: TObject,
): boolean => equals(initialValues, currentValues);

const debounce = (func: any, time: number, n: string): any => {
  const name = n || func.name;
  const waiterFunc = () => {
    window.debounceState[name] = setTimeout(() => {
      func();
      window.debounceState = omit([name], window.debounceState);
    }, time);
  };
  window.debounceState = window.debounceState || {};
  if (window.debounceState[name] === undefined) {
    func();
  }
  if (window.debounceState[name]) {
    clearTimeout(window.debounceState[name]);
    waiterFunc();
  }
  if (!window.debounceState[name]) waiterFunc();
};

export {
  checkValuesBeforeRequest,
  debounce,
};
