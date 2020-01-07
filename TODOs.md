for release:
- make website
- make screenshots for iOS
- testflight testing
- app store release

frontend:
- URGENT: update splashscreen to use new icon and white background
- convert all date processing logic to use momentjs
- currently, i suspect that the date logic is a bit convoluted and is missing a lot of the edge cases. should do some rigourous testing by dumping the flights for three days straight and make sure all conditions are solid
- code is like spaghetti -- refactor & clean it
- unit tests?
- migrate to ES6 function declarations

backend:
- parallel processing to speed up flight finding?
