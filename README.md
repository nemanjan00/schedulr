# schedulr

Constraint based cron-like scheduler. 

## Summary

<!-- vim-markdown-toc GFM -->

* [Goal for MVP](#goal-for-mvp)
* [Documentation](#documentation)
	* [Using chaining for configuration](#using-chaining-for-configuration)
	* [```schedulr run(int)```](#schedulr-runint)
	* [```schedulr times()```, ```schedulr in()```](#schedulr-times-schedulr-in)
	* [```schedulr every()```](#schedulr-every)
	* [```schedulr years()```, ```schedulr months()```, ```schedulr weeks()```, ```schedulr days()```, ```schedulr hours()```, ```schedulr minutes()```, ```schedulr miliseconds()```, ```schedulr nanoeseonds()```](#schedulr-years-schedulr-months-schedulr-weeks-schedulr-days-schedulr-hours-schedulr-minutes-schedulr-miliseconds-schedulr-nanoeseonds)
* [Authors](#authors)

<!-- vim-markdown-toc -->

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

## Documentation

### Using chaining for configuration

Since most of cron-like schedulers are hard to learn for people who are just starting, I decided to make my very easy for humans to read and also made it so users can do a lot more customization that way. 

### ```schedulr run(int)```

```run``` takes as param the number of times you want to run function in certain interval. *default is 1*

### ```schedulr times()```, ```schedulr in()```

These functions are there just to make chain mora human readable. 

### ```schedulr every()```

Sets multiplier for time interval. 

These functions are there just to make chain mora human readable. 

### ```schedulr years()```, ```schedulr months()```, ```schedulr weeks()```, ```schedulr days()```, ```schedulr hours()```, ```schedulr minutes()```, ```schedulr miliseconds()```, ```schedulr nanoeseonds()```

These functions add constraint so function runs every x * time interval, based on value set using ```schedulr every(int)```

These functions are there just to make chain mora human readable. 

## Authors

 * [nemanjan00](https://github.com/nemanjan00) \[[Donate](https://www.paypal.me/nemanjatop)\]
