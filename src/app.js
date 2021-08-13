import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import 'aos/dist/aos.css';
import local from './scripts/view/local.js';
import global from './scripts/view/global.js';
import AOS from 'aos';

AOS.init();
local();
global();