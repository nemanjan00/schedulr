module.exports = {
	run: () => {
		// How often to check if it changed. (check if unixtime is dividable by this number. )

		const intervals = {
			milisecond: 1,
			second: intervals.milisecond * 1000,
			minute: intervals.second * 60,
			hour: intervals.minute * 60,
			day: intervals.hour * 24,
			month: intervals.day,
			year: intervals.month
		};

		const options = {
			divider: 1, // This is number of times to run function in specified interval
			multiplier: 1, // This is multiplier for how much of interval needs to pass
			interval: "second",

			constraints: []
		};

		const s = {
			run: (divider) => {
				if(divider !== undefined){
					options.divider = divider;
				}

				return s;
			},

			and: s.run, // and is alias of r. 
			
			doNothing: () => s,

			times: s.doNothing,
			in: s.doNothing,

			every: (multiplier) => {
				if(multiplier !== undefined){
					options.multiplier = multiplier;
				}
			},

			setInterval: (interval) => {
				if(interval !== undefined && intervals[interval] !== interval){
					options.interval = interval;
				}
			},

			second: s.setInterval("second"),
			minute: s.setInterval("minute"),
			hour: s.setInterval("hour"),
			day: s.setInterval("day"),
			month: s.setInterval("month"),
			year: s.setInterval("year"),
		};

		return s;
	}
};

