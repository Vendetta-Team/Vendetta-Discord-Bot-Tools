const template = [
    {
        role: 'help',
        submenu: [
            {
                label: "info",
                click() {
                    const options = {
                        type: 'none',
                        buttons: ['Okay'],
                        defaultId: 2,
                        title: 'Program information',
                        message: 'Vendetta Discord Bot Tools',
                        detail: 'Maker : 천마 [Vendetta]#4120\n\nModules\n\nElectron\nDiscord.js\nFs\nUrl\nPath\nsemantic-ui\nffmpeg\nytdl-core\nyt-search'
                    };
                    const response = require('electron').dialog.showMessageBox(options);
                    console.log(response);
                }
            }
            , {
                label: 'Support Server',
                click() { require('electron').shell.openExternal('https://discord.gg/5VAHckw') }
            }
        ]
    }
];

module.exports = template;