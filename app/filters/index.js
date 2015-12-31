import angular from 'angular';
import WhiteSpaceFilter from './whitespace.filter.js';

export default angular.module('espackApp.filters', [])
    .filter('whiteSpace',WhiteSpaceFilter)
    .name;