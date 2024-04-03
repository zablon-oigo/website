/**
 * Determines the operating system of the user based on the user agent string and platform information.
 * @returns {string} The operating system identified. Possible values are: 'macos', 'ios', 'windows', 'android', 'linux', or `null` if the operating system couldn't be determined.
 */
export function getOS() {
    var userAgent = window.navigator.userAgent,
    platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ['Mac', 'MacOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'macos';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'ios';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'windows';
    } else if (/Android/.test(userAgent)) {
        os = 'android';
    } else if (/Linux/.test(platform)) {
        os = 'linux';
    }

    return os;
}

/**
 * Launches ScribbleLab by replacing the current window location with the specified URL.
 * @function
 * @name launchScribbleLab
 * @memberof window
 * @returns {void}
 */
var launchScribbleLab = function() {
    window.location.replace("scribblelab://marketplace")
};

/**
 * Opens ScribbleLab by triggering the launch function.
 * @function
 * @name openScribbleLab
 * @memberof window
 * @returns {void}
 */ 
export var openScribbleLab = function() {
    launchScribbleLab();
};