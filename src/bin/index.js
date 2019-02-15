#!/usr/bin/env node

import getLocator from '../GeoLocator';
import beatify from '../beatifier';

const locatePosition = getLocator();

const run = async () => {
  const [,, ipAdress] = process.argv;
  try {
    const data = await locatePosition(ipAdress);
    console.log(beatify(data));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

run();
