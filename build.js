const { compile } = require("nexe");
const pack = require("./package.json");
const fs = require("fs");
const util = require("./util");

util.mkdir("nexe-conf");
fs.copyFileSync("config/default.json", "nexe-conf/default.json");
["linux", "alphine", "windows"].forEach((os) => {
	["x86", "x64"].forEach((arch) => {
		build(`${os}-${arch}`);
	});
});
build("macos-x64");

function build(platform) {
	compile({
		input: "cli.js",
		resources: ["dist", "nexe-conf", "node_modules/discord.js/src"],
		name: `build/2bored2wait-${platform}-${pack.version}`,
		target: `${platform}-14.15.3`
	});
}
