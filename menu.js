const { shell } = require('electron')
const template = [
    {
        role: 'help',
        submenu: [
            {
                label: "Support Site",
                click() {
                    shell.openExternal('https://vendetta-team.glitch.me/')
                }
            }
            , {
                label: 'Support Discord',
                click() { shell.openExternal('https://discord.gg/5VAHckw/') }
            }
        ]
    }
];

module.exports = template;
