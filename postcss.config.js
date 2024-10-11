const plugin = require('tailwindcss')
const tailwindcss = require('tailwindcss')

module.export = {
    plugins :[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}