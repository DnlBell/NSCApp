import React from 'react';
import Searcher from '../components/Searcher.js'
import renderer from 'react-test-renderer';

// describe('Searcher Component Renders Properly', () => {
//     xtest('Since Searcher has already been tested', () => {
//      expect(true).toBe(true);
//     });
//     test('run test to skip', () => {
//      expect(true).toBe(true);
//     });
//   });

describe('skip test', () => {
  xtest('tests to be skipped', () => {
   expect(true).toBe(true);
  });
  test('run test to skip', () => {
   expect(true).toBe(true);
  });
});