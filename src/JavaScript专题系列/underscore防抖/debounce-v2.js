/**
 * 第四版
 * 新需求:立刻执行
 * 添加immediately参数判断是否立刻执行
 */
var count = 1;
var container = document.getElementById("container");

function getUserAction(e) {
    container.innerHTML = count++;
};

function debounce(func, wait, immediate) {
    /**
     * 返回值
     * result 用来解决immediate为false时,值为undefined
     * 使用了setTimeout ，
     * 我们将func.apply(context, args)的返回值赋给变量，
     * 最后再 return 的时候，值将会一直是 undefined
     */
    var timeout, result;
    return function() {
        /**
         * 解决this指向问题
         */
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            //如果已经执行过,不再执行
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) {
                result = func.apply(context, args);
            }
        } else {
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        }
        return result;
    }
}
//container.onmousemove = getUserAction;
container.onmousemove = debounce(getUserAction, 1000, true);