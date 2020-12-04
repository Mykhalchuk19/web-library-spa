import React from 'react';
import { isEmpty } from 'ramda';
import Layout from '../Layout/Layout';
import useInfoOfBook from './useInfoOfBook';
import { fileHelpers, translateHelpers, convertDataHelpers } from '../../utils/helpers';
import { TAuthorItem } from '../../interfaces/authorsInterfaces';
import './style.sass';
import { Loader } from '../../components';

const { convertEmptyValueForShow } = convertDataHelpers;

const DOWNLOAD_LINK_TEXT = 'Download';

const InfoOfBookContainer: React.FC = () => {
  const { book, t } = useInfoOfBook();
  return (
    !isEmpty(book) && book.id ? (
      <Layout>
        <div className="book">
          <div className="book__wrapper">
            <h3 className="book__text book__title">{book.title}</h3>
            <p className="book__text book__short-description">
              {t('Description')}
              :
              {' '}
              {convertEmptyValueForShow(book.short_description)}
            </p>
            <p className="book__text book__publishing-house">
              {t('Publishing house')}
              :
              {' '}
              {convertEmptyValueForShow(book.publishing_house)}
            </p>
            <p className="book__text book__year">
              {t('Year')}
              :
              {' '}
              {convertEmptyValueForShow(book.year)}
            </p>
            <p className="book__text book__city">
              {t('City')}
              :
              {' '}
              {convertEmptyValueForShow(book.city)}
            </p>
            <p className="book__text book__edition">
              {t('Edition')}
              :
              {' '}
              {convertEmptyValueForShow(book.edition)}
            </p>
            <p className="book__text book__series">
              {t('Series')}
              :
              {' '}
              {convertEmptyValueForShow(book.series)}
            </p>
            <p className="book__text book__category">
              {t('Category')}
              :
              {' '}
              {convertEmptyValueForShow(book.category?.title)}
            </p>
            <ul className="book__text book__list-authors">
              <span className="book__text">
                {t('Authors')}
                :
              </span>
              { !isEmpty(book.authors) ? (book.authors as Array<TAuthorItem>).map((
                author: TAuthorItem,
              ) => (
                <li
                  className="book__item-authors"
                  key={author.id}
                >
                  {`${author.firstname} ${author.lastname}`}
                </li>
              )) : t('No authors have been added to this book yet')}
            </ul>
            <a
              className="download__link"
              href={fileHelpers.getLinkForDownloadBook(book.file?.filename)}
              download
            >
              {translateHelpers.t(`${DOWNLOAD_LINK_TEXT}`, 'common')}
            </a>
          </div>
        </div>
      </Layout>
    )
      : (<Loader />));
};

export default InfoOfBookContainer;
