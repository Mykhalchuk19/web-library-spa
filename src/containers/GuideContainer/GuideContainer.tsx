import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../Layout/Layout';
import './style.sass';

const GuideContainer: React.FC = () => {
  const { t } = useTranslation(['guide', 'common']);
  return (
    <Layout>
      <div className="guide">
        <div className="guide__wrapper">
          <h2 className="guide__title">{t('common:Web library')}</h2>
          <ul className="guide__list">
            <span className="guide__list--title">{t('guide:There are four roles in this application')}</span>
            <li className="guide__item">{t('common:User')}</li>
            <li className="guide__item">{t('common:Manager')}</li>
            <li className="guide__item">{t('common:Admin')}</li>
            <li className="guide__item">{t('common:Super admin')}</li>
          </ul>
          <ol className="guide__list">
            <span className="guide__list--title">{t('guide:Application consist of seven main sections')}</span>
            <li className="guide__item">{t('common:Users')}</li>
            <li className="guide__item">{t('common:Categories')}</li>
            <li className="guide__item">{t('common:Books')}</li>
            <li className="guide__item">{t('common:Authors')}</li>
            <li className="guide__item">{t('common:Profile')}</li>
            <li className="guide__item">{t('common:Guide')}</li>
            <li className="guide__item">{t('guide:Detailed information of book')}</li>
          </ol>
          <p className="guide__text">{t('guide:User can see authors, categories, other users, also see and download books and update his profile')}</p>
          <p className="guide__text">{t('guide:Manager can create, update, and delete categories, books, authors, and all other that the user can')}</p>
          <p className="guide__text">{t('guide:Admin can update and delete other users and all other that manager can')}</p>
          <p className="guide__text">{t('guide:Super admin can do anything')}</p>
        </div>
      </div>
    </Layout>
  );
};

export default GuideContainer;
