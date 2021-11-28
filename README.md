# Gamepad viewer skins

A collection of skins I use to show controller inputs on my OBS overlay. These skins provide CSS overrides for [Gamepad Viewer](https://gamepadviewer.com/).

## Usage

Note that you cannot use the "Raw file" link directly in Gamepad Viewer app or on OBS as they don't return a "text/css" response.

* Clone this repo;
* Run `npm install`;
* Run `npm run build:xbone` to compile the Xbox One controller skin;
* Run `npm run build:ps4` to compile the PS4 controller skin;
* Copy the CSS content of the skin you want;
* Paste in the "Custom CSS" box in your OBS browser source. Careful about the gamepad version you selected on Gamepad Viewer!

## Todos
- [ ] Add Github Action to deploy the latest CSS version directly to a FTP server to streamline the updating version.
- [x] Add SVG files directly inside the CSS files as base64 to reduce the number of external calls.
