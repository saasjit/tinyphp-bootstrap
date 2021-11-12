import './summernote.scss';
import 'summernote/dist/summernote-bs4.js';
import 'summernote/dist/lang/summernote-zh-CN.js';

($ => {
    if ($.hasOwnProperty('summernote')) {
        $.summernote.options.lang = 'zh-CN';
    }
})($);

export default {}