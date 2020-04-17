module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html'
        }
    },
    // chainWebpack: config => {
    //     config.module
    //     .rule('js')
    //     .include
    //         .add(__dirname + 'packages')
    //         .end()
    //     .use('babel')
    //         .loader('babel-loader')
    //         .tap(options => {
    //             // 修改它的选项...
    //             return options
    //         })
    // },
    css: { 
        extract: false
    }
}