import { equals, omit } from 'ramda';

declare global {
  interface Window { debounceState: any; }
}

window.debounceState = window.debounceState || { };

type TObject = {
  // eslint-disable-next-line max-len
    [key: string]: any,
}

const isDifferentValues = (
  initialValues: TObject,
  currentValues: TObject,
  needRequest?: boolean,
): boolean => needRequest || !equals(initialValues, currentValues);

const debounce = (func: () => void, time: number, n: string, needSearch: boolean): void => {
  const name = n || func.name;
  const waiterFunc = () => {
    window.debounceState[name] = setTimeout(() => {
      func();
      window.debounceState = omit([name], window.debounceState);
    }, time);
  };
  window.debounceState = window.debounceState || {};
  if (window.debounceState[name]) {
    clearTimeout(window.debounceState[name]);
    waiterFunc();
  }
  if (!window.debounceState[name] && needSearch) {
    waiterFunc();
  }
};

export {
  isDifferentValues,
  debounce,
};
