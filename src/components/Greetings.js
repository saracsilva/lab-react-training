import React from 'react';

function Greetings(lang) {
  let language = lang;
  console.log(language);
  if (language.lang === 'de') {
    return <h1> Hallo {language.children}</h1>;
  }
  if (language.lang === 'fr') {
    return <h1> Bonjour {language.children}</h1>;
  }
}

export default Greetings;
