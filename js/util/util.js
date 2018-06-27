var $ = require('jquery');
var _ = require('underscore');

var $body = $('body');
var events = [];
var uId = 0;

function _createId() {
	return 'X' + (++uId).toString() + (+new Date());
}

/* PUBSUB */
var pubsub = (function() {
	function _subscribe(name, cb) {
		if (!events[name]) {
			events[name] = [];
		}

		var token = _createId();
		events[name].push({
			token : token,
			fn : cb
		});

		return token;
	}

	function _unsubscribe(token) {
		for (var ev in events) {
			if (events[ev]) {
				for (var i = 0, iLen = events[ev].length; i < iLen; i += 1) {
					if (events[ev][i].token === token) {
						events[ev].splice(i, 1);
						return token;
					}
				}
			}
		}
	}

	function _publish(name, args) {
		if (!events[name]) {
			return;
		}

		var subscribers = events[name];
		var count = subscribers ? subscribers.length : 0;

		while (count--) {
			subscribers[count].fn(name, args);
		}
	}

	return {
		subscribe : _subscribe,
		unsubscribe : _unsubscribe,
		publish : _publish
	};
})();

/* DOM */
var dom = (function() {
	function _prefix($el, prop, val) {
		var prefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
		_.each(prefixes, function(pre) {
			$el.css(pre + prop, val);
		});
	}

	function _clipPath($el, prop, val) {
		var prefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
		var polygon = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">' +
			'<clipPath id="<%= id %>">' +
			'<polygon points="<%= points %>">' +
			'</polygon>' +
			'</clipPath>' +
			'</svg>';

		_.each(prefixes, function(pre) {
			if (pre === '-moz-') {
				var id = _createId();
				var svg = _.template(polygon, {
					id : id,
					points : val.replace(/px/gi, '')
				});
				$body.append(svg);
				$el.css(prop, 'url("#' + id + '")');
			} else {
				$el.css(pre + prop, 'polygon(' + val + ')');
			}
		});
	}

	function _onTransitionEnd($el, callback) {
		var id = _createId();
		$el.data('x-guid', id);
		$el.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(e) {
			var guid = $(e.target).data('x-guid');
			if (guid === id && typeof callback === 'function') {
				callback();
			}
		});
	}

	function _onTransitionEndAlways($el, callback) {
		var id = _createId();
		$el.data('x-guid', id);
		$el.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(e) {
			var guid = $(e.target).data('x-guid');
			if (guid === id && typeof callback === 'function') {
				callback();
			}
		});
	}

	function _onAnimationEnd($el, callback) {
		var id = _createId();
		$el.data('x-guid', id);
		$el.one('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', function(e) {
			var guid = $(e.target).data('x-guid');
			if (guid === id && typeof callback === 'function') {
				callback();
			}
		});
	}

	function _onAnimationEndAlways($el, callback) {
		var id = _createId();
		$el.data('x-guid', id);
		$el.on('animationend webkitAnimationEnd oAnimationEnd oanimationend MSAnimationEnd', function(e) {
			var guid = $(e.target).data('x-guid');
			if (guid === id && typeof callback === 'function') {
				callback();
			}
		});
	}

	return {
		prefix : _prefix,
		clipPath : _clipPath,
		onTransitionEnd : _onTransitionEnd,
		onTransitionEndAlways : _onTransitionEndAlways,
		onAnimationEnd : _onAnimationEnd,
		onAnimationEndAlways : _onAnimationEndAlways
	};
})();

/* COOKIE */
var cookie = (function() {
	function _get(name) {
		var nm = name + '=';
		var ca = document.cookie.split(';');
		for(var i = 0, iLen = ca.length; i < iLen; i += 1) {
			var c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nm) === 0) {
				return c.substring(nm.length, c.length);
			}
		}
		return null;
	}

	function _set(name, value, days) {
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toGMTString();
		}
		document.cookie = name + '=' + value + expires + '; path=/';
	}

	return {
		get : _get,
		set : _set
	};
})();

// Ratio
var ratio = (function() {
	function _getRatio(ratio, el) {
		var width = el && typeof el !== 'undefined' ? el.outerWidth() : $(window).outerWidth();
		return Math.floor(width / ratio);
	}

	return {
		getRatio: _getRatio
	};
})();

export default {
	pubsub : pubsub,
	dom : dom,
	cookie : cookie,
	ratio: ratio
};