import { mapObjIndexed } from 'ramda';

type TObject = {
  [key: string]: any
}

const createFormData = (objWithData: TObject): FormData => {
  const formData = new FormData();
  mapObjIndexed((value, key) => formData.append(`${key}`, value), objWithData);
  return formData;
};

const getLinkForDownloadBook = (filename?: string): string => `${process.env.REACT_APP_API_URL}books/download/${filename}`;

export {
  createFormData,
  getLinkForDownloadBook,
};
