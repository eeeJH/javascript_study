const path = require('path');

// https://webpack.js.org/plugins/html-webpack-plugin/ 참고
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        about: "./src/about.js"
    },
    output: {
        // __dirname : webpack.config.js 위치의 경로를 알려주는 약속된 변수 node.js의
        // "public" (이하 사용자 폴더) 경로에 최종적인 결과물을 갖다놓는다.
        path: path.resolve(__dirname, "public/index_bundle.js"),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [

                    // style-loader > css-loader 순으로 입력해주자.
                    // 순서를 지키지 않으면 반대로 하면 에러가 발생한다.

                    // css파일의 코드를 스타일 태그에 주입시켜준다.
                    'style-loader',

                    // webpack을 동작시켰을 때, 확장자가 css인 파일을 만나면 webpack이 알아서 
                    // css파일을 webpack안으로 Load 시켜준다.
                    'css-loader'
                    

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',

            // entry의 이름과 같은거 (변수)
            chunks: ['index']
        }),

        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ],
}