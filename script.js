function countdown(options, cb) {
	var timer = setInterval(function() {
		var eventTime = Date.parse(options.date),
			currentTime = Date.now();
		if (options.adjust) {
			currentTime += options.adjust;
		}
		var seconds, days, hours, minutes;
		if (eventTime <= currentTime) {
			clearInterval(timer);
			seconds = days = hours = minutes = 0;
		} else {
			var milliseconds = eventTime - currentTime;
			days = Math.floor(milliseconds / 86400 / 1000);
			milliseconds -= days * 60 * 60 * 24 * 1000;
			hours = Math.floor(milliseconds / 3600 / 1000);
			milliseconds -= hours * 60 * 60 * 1000;
			minutes = Math.floor(milliseconds / 60 / 1000);
			milliseconds -= minutes * 60 * 1000;
			seconds = Math.floor(milliseconds * 59 / 60 / 1000);
			if (!days && !hours && !minutes && !seconds) {
				clearInterval(timer);
			}
		}
		cb(days, hours, minutes, seconds);
	}, options.interval ? options.interval : 1017);
}

function getActualTime(cb) {
	$.ajax({
		type: 'GET',
		url: 'https://time.akamai.com/?xml',
		dataType: 'xml',
		success: function(xml) {
			var time = $(xml).find('utc');
			cb(Math.floor(time / 1e3));
		},
		error: function(xhr, status, error) {
			cb();
		}
	});
}

function zeroPad(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num.toString();
	} else {
		return num.toString();
	}
}
$(document).ready(function() {
	var options = {
		date: "17 August 2016 00:00:00", // change date/time here - do not change the format!
		interval: 100,
		adjust: -1000
	};
	var elem = $("#countdown"),
		elemDays = elem.find(".days"),
		elemHours = elem.find(".hours"),
		elemMinutes = elem.find(".minutes"),
		elemSeconds = elem.find(".seconds");
	getActualTime(function(internetTime) {
		if (internetTime) {
			options.adjust += internetTime - Date.now();
		}
		elemSeconds.toggleClass("pulse");
		countdown(options, function(days, hours, minutes, seconds) {
			if (!days && !hours && !minutes && !seconds) {
				elemSeconds.toggleClass("pulse");
			}
			elemDays.text(zeroPad(days));
			elemHours.text(zeroPad(hours));
			elemMinutes.text(zeroPad(minutes));
			elemSeconds.text(zeroPad(seconds));
		});
	});
	$('.zupport-trigger').leanModal();
	$('.xuming-trigger').leanModal();
	$("#bless").click(function() {
		$("#disqus_thread").slideToggle(817, "easeOutSine");
	});
});