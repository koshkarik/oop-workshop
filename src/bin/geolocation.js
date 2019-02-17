#!/usr/bin/env node

import GeoLocator from '../GeoLocator';
import beatify from '../beatifier';

const locator = new GeoLocator();

const run = async () => {
  const [,, ipAdress] = process.argv;
  try {
    const data = await locator.getLocation(ipAdress);
    console.log(beatify(data));
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

run();
