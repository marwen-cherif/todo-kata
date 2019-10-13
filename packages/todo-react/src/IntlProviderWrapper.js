import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';

import messages from 'todo-common/src/translations';

const language = navigator.language.split(/[-_]/)[0];

const initialState = {
  locale: language,
  messages: messages[language],
};

const IntlProviderWrapper = props => {
  const [state, setState] = useState(initialState);
  const switchLanguage = language =>
    setState({locale: language, messages: messages[language]});

  const {children} = props;
  const {locale, messages} = state;
  return (
    <IntlProvider
      key={locale}
      locale={locale}
      messages={messages}
      defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;
