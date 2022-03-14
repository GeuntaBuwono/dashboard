/**
 * @jest-environment jsdom
 */

import { getStorageValue } from '../useLocalStorage';

jest.spyOn(window.localStorage.__proto__, 'setItem');

const exampleJson = {
  glossary: {
    title: 'example glossary',
    GlossDiv: {
      title: 'S',
      GlossList: {
        GlossEntry: {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML']
          },
          GlossSee: 'markup'
        }
      }
    }
  }
};

describe('useLocalStorage', () => {
  it('localStorage should has a value', () => {
    expect(localStorage.setItem('users', JSON.stringify(exampleJson)));
    expect(localStorage.getItem('users')).toBe(JSON.stringify(exampleJson));
  });
  it('return should be JSON.parse', () => {
    const result = getStorageValue({
      key: 'users',
      defaultValue: JSON.stringify(exampleJson)
    });
    expect(result).toStrictEqual(exampleJson);
  });
});
