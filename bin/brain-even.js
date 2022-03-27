#!/usr/bin/env node
/* eslint-disable import/no-named-as-default */
import readlineSync from 'readline-sync';
import getRandomInt from '../scr/modRandom.js';
// eslint-disable-next-line import/no-named-as-default-member
import { startSay, name } from '../scr/cli.js';// почему-то говорит про ошибку в импорте
import braineven from '../games/logics-brain-evan.js';

braineven();
