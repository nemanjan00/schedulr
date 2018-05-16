# schedulr

Constraint based cron-like scheduler. 

## Goal for MVP

```javascript
const s = require("schedulr");

// Runs function every 8 hours (start time is now, so, current time - time of beggining % 8h == 0) if day is monday. 
s.run().every(8).hours().fromNow().if({day: "monday"}).function(() => {});

// Runs function every 8 hours (start time is today, so, current time - day of the beggining % 8h == 0) if day is monday. 
s.run().every(8).hours().fromStartOfDay().if({day: "monday"}).function(() => {});

// Runs on *:00:00 if it is third week of month. 
s.run().on().hour().if({week: 3}).function(() => {});

// Runs 8 times each hour if week is 3th. 
s.run(8).times().in().hour().if({week: 3}).function(() => {});
```

## Authors

 * [nemanjan00](https://github.com/nemanjan00) \[[Donate](https://www.paypal.me/nemanjatop)\]
