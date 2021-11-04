import React from 'react';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { MainPage } from 'src/components/pages/MainPage';
import '/public/css/styles.css';


function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker>
          <MainPage />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
