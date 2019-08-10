// bad
import myModule from 'my-loader!my-module'
import theme from 'style!css!./theme.css'

var myModule = require('my-loader!./my-module')
var theme = require('style!css!./theme.css')
