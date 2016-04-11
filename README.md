# Website Performance Optimization

The home portfolio page is now optimized to reach a score over **94/100** on PageSpeed Insights.

## Installation

1. Clone repository with `git clone https://github.com/ahusseinali/udportfolio.git`
2. Host the _/dist_ directory on a local webserver.
3. _web.config_ is made for IIS web server, thus IIS is recommended for maximum PageSpeed score.
4. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

## Running the hosted page:
1. Open a browser and visit http://localhost:80/<Application Name>/
6. Go to **ngrok** download directory and run `ngrok http 80`.
7. The _Forwarding_ section contains the mapping between localhost and the public url.
8. Copy the public URL ngrok gives you and try running it through PageSpeed Insights.
