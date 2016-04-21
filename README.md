# Website Performance Optimization

The home portfolio page is now optimized to reach a score over **94/100** on PageSpeed Insights.

Cam's Pizza page scrolling now takes about **0.05 ms** to generate 10 scrolling frames and **0.8 ms** to resize pizza frames.

## Installation

1. Clone repository with `git clone https://github.com/ahusseinali/udportfolio.git`
2. Host the _/dist_ directory on a local webserver.
3. _web.config_ is made for IIS web server, thus IIS is recommended for maximum PageSpeed score.
4. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

## Rebuild Instructions

1. Install the latest Node.js from [nodejs](https://nodejs.org/en/).
2. Open project directory in Command Line.
3. Run `npm install` to install all build dependencies.
4. Run `gulp` to build _/dist_ directory.

## Running Project
1. Open a browser and visit http://localhost:80/<Application Name>/
2. Go to **ngrok** download directory and run `ngrok http 80`.
3. The _Forwarding_ section contains the mapping between localhost and the public url.
4. Copy the public URL ngrok gives you and try running it through PageSpeed Insights.
5. Navigate from home page to Cam's Pizza page.
6. Open Chrome Dev Tools to see the console window.
7. Explore the time needed to load/scroll/resize pizzas and compare to original time.

