# schedulr

Constraint based cron-like scheduler. 

## Summary

<!-- vim-markdown-toc GFM -->

* [Goal for MVP](#goal-for-mvp)
* [Documentation](#documentation)
	* [Installation](#installation)
	* [What is not ready yet?](#what-is-not-ready-yet)
	* [Using chaining for configuration](#using-chaining-for-configuration)
	* [```schedulr run(int)```](#schedulr-runint)
	* [```schedulr times()```, ```schedulr in()```](#schedulr-times-schedulr-in)
	* [```schedulr every()```](#schedulr-every)
	* [```schedulr years()```, ```schedulr months()```, ```schedulr weeks()```, ```schedulr days()```, ```schedulr hours()```, ```schedulr minutes()```, ```schedulr seconds()```](#schedulr-years-schedulr-months-schedulr-weeks-schedulr-days-schedulr-hours-schedulr-minutes-schedulr-seconds)
	* [```schedulr fromNow()```, ```schedulr fromStartOfDay()```](#schedulr-fromnow-schedulr-fromstartofday)
	* [```schedult if(array)```](#schedult-ifarray)
	* [```schedulr function(function)```](#schedulr-functionfunction)
	* [```schedulr and(int)```](#schedulr-andint)
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

### Installation

```
npm install constraint-schedulr
```

### What is not ready yet? 

 * if function

 * month and year interval

### Using chaining for configuration

Since most of cron-like schedulers are hard to learn for people who are just starting, I decided to make my very easy for humans to read and also made it so users can do a lot more customization that way. 

### ```schedulr run(int)```

```run``` takes as param the number of times you want to run function in certain interval. *default is 1*

### ```schedulr times()```, ```schedulr in()```

These functions are there just to make chain mora human readable. 

### ```schedulr every()```

Sets multiplier for time interval. 

These functions are there just to make chain mora human readable. 

### ```schedulr years()```, ```schedulr months()```, ```schedulr weeks()```, ```schedulr days()```, ```schedulr hours()```, ```schedulr minutes()```, ```schedulr seconds()```

These functions add constraint so function runs every x * time interval, based on value set using ```schedulr every(int)```

These functions are there just to make chain mora human readable. 

### ```schedulr fromNow()```, ```schedulr fromStartOfDay()```

These 2 functions set reference point for constraint solver to calculate intervals against. Default value is now. 

### ```schedult if(array)```

This function takes array of constraints and adds them to constraints array. 

### ```schedulr function(function)```

This function adds function to list of functions to be called when constraints added so far got resolved. 

### ```schedulr and(int)```

This function starts new constraint and uses the same arguments as ```run```. 

## Authors

 * [nemanjan00](https://github.com/nemanjan00) \[[Donate](https://www.paypal.me/nemanjatop)\]
