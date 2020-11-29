import React from 'react';
import NewsCardList from './NewsCardList';
import SavedNewsHeader from './SavedNewsHeader';

function SavedNews() {
  return (
    <>
      <SavedNewsHeader />
      <NewsCardList
        cardSettings={{ button: 'delete-button', keyword: true, message: 'delete-message' }}
        sectionSettings={{ title: false, showMoreButton: false }}
      />
    </>
  );
}

export default SavedNews;
