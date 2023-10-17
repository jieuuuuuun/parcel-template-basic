// ESM 에크마 스크립트 모듈
//CommonJs
//import  autoprefixer from 'autoprefixer'  동일하다. 가져오기
//export {
//     plugins: [
//         autoprefixer
//     ]
// } 내보내기

module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}