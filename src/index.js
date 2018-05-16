const originalOptions = {
	typeOfConstraint: "generated",

	divider: 1, // This is number of times to run function in specified interval
	multiplier: 1, // This is multiplier for how much of interval needs to pass
	interval: "second",

	referenceTime: new Date()
};

module.exports = {
	run: (divider) => {
		// How often to check if it changed. (check if unixtime is dividable by this number. )

		const intervals = {};
		intervals.milisecond =  1000;
		intervals.second = intervals.milisecond * 1000;
		intervals.minute = intervals.second * 60;
		intervals.hour = intervals.minute * 60;
		intervals.day = intervals.hour * 24;
		intervals.month = intervals.day;
		intervals.year = intervals.month;

		const callbacks = [];

		const constraints = [];

		let interval = undefined;

		let options = undefined;

		const s = {
			run: (divider) => {
				if(divider !== undefined){
					options.divider = divider;
				}

				return s;
			},

			setDefaultOptions: () => {
				options = JSON.parse(JSON.stringify(originalOptions));

				return s;
			},

			setTimer: () => {
				let min = intervals.year;

				constraints.forEach((constraint) => {
					if(constraint.typeOfConstraint == "generated"){
						if((intervals[constraint.interval] / constraint.divider) * constraint.multiplier < min){
							min = intervals[constraint.interval] / constraint.divider * constraint.multiplier;
						} else {
							Object.keys(intervals).forEach((interval) => {
								if(constraint[interval] !== undefined && intervals[interval] < min){
									min = intervals[interval] / constraint.divider * constraint.multiplier;
								}
							});
						}
					}
				});

				if(interval !== undefined){
					clearInterval(interval);
				}

				interval = setInterval(s.checkConstraints, min / 1000);

				return s;
			},

			doNothing: () => s,

			every: (multiplier) => {
				if(multiplier !== undefined){
					options.multiplier = multiplier;
				}

				return s;
			},

			setInterval: (interval) => {
				if(interval !== undefined && intervals[interval] !== interval){
					options.interval = interval;
				}

				return s;
			},

			second: () => s.setInterval("second"),
			minute: () => s.setInterval("minute"),
			hour: () => s.setInterval("hour"),
			day: () => s.setInterval("day"),
			month: () => s.setInterval("month"),
			year: () => s.setInterval("year"),

			seconds: () => s.setInterval("second"),
			minutes: () => s.setInterval("minute"),
			hours: () => s.setInterval("hour"),
			days: () => s.setInterval("day"),
			months: () => s.setInterval("month"),
			years: () => s.setInterval("year"),

			and: () => {
				constraints.push(options);
				s.setDefaultOptions();

				return s;
			},

			fromNow: () => {
				options.referenceTime = new Date();

				return s;
			},

			//TODO: From today
			fromToday: () => s.fromNow,

			//TODO: From this month
			fromThisMonth: () => s.fromNow,

			//TODO: From this year
			fromThisYear: () => s.fromNow,

			if: (options) => {
				options.type = "custom";

				constraints.push(options);

				return s;
			},

			function: (callback) => {
				if(JSON.stringify(options) !== JSON.stringify(originalOptions) || constraints.length == 0){
					s.and();
				}

				callbacks.push(callback);

				s.setTimer();

				callback();

				return s;
			},
			checkConstraints: () => {
				let valid = true;
				const date = new Date();

				constraints.forEach((constraint) => {
					if(constraint.interval == "year") {
						//TODO: Year
					} else if(constraint.interval == "month"){
						//TODO: Month
					} else {
						let difference = (date * 1) - (new Date(constraint.referenceTime) * 1);

						difference = difference % (((intervals[constraint.interval] / 1000) / constraint.divider) * constraint.multiplier);
						difference = difference - difference % 100;

						if(difference !== 0){
							valid = false;
						}
					}
				});

				if(valid){
					s.runCallbacks();
				}

				return s;
			},
			runCallbacks: () => {
				callbacks.forEach(callback => callback());

				return s;
			}
		};

		const aliases = {
			times: s.doNothing,
			in: s.doNothing

		};

		Object.keys(aliases).forEach((alias) => {
			s[alias] = aliases[alias];
		});

		s.setDefaultOptions();

		return s.run(divider);
	}
};

