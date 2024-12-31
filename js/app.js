// Core Application Logic
import { initAPI } from './api.js';
import { initUI } from './utils.js';
import { initState } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
    initAPI();
    initState();
    initUI();
});