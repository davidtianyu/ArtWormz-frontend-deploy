export default {
  // 数字三位加逗号
  formatNumber: function(num) {
    if (num == null) return '';
    if (num == NaN || num == 'NaN') return '';
    if (num == 'undefined') return '';
    if (num == '--') return '--';
    let number = num + '';
    let numberArray = number.split('.');
    let integerPart = numberArray[0];
    let decimalPart = numberArray.length > 1 ? '.' + numberArray[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(integerPart)) {
        integerPart = integerPart.replace(rgx, '$1' + ',' + '$2');
    }
    return integerPart + decimalPart;
  },
  /**
   * 格式化日期时间
   * @date 2021/11/16
   * @author Louis
   * @param  {[type]} timestamp [timestamp]
   * @return {[type]}           [String]
   */
  formatDateTime(timestamp) {
    // 在日期格式中，月份是从0开始的，因此要加0
    // 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11
    var date = new Date(timestamp)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    month = month < 10 ? ('0' + month) : month
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    // return month + '/' + day + '/' +  + ' ' + hours + ':' + minutes + ':' + seconds;
    return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds
  },
  /**
   * 格式化时间
   * @date 2021/11/16
   * @author Louis
   * @param  {[type]} timestamp [timestamp]
   * @return {[type]}           [String]
   */
  formatTime(timestamp) {
    // 在日期格式中，月份是从0开始的，因此要加0
    // 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11
    var date = new Date(timestamp)
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return hours + ':' + minutes + ':' + seconds
  },
  /**
   * 格式化日期
   * @date 2021/11/16
   * @author Louis
   * @param  {[type]} timestamp [timestamp]
   * @return {[type]}           [String]
   */
  formatDate(timestamp) {
    // 在日期格式中，月份是从0开始的，因此要加0
    // 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11
    var date = new Date(timestamp)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    month = month < 10 ? ('0' + month) : month
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return year + '-' + month + '-' + day
  },
  /**
   * 格式化短日期时间
   * @date 2021/11/16
   * @author Louis
   * @param  {[type]} date [String]
   * @return {[type]}     [String]
   */
  formatShortDateTime(date) {
    // 在日期格式中，月份是从0开始的，因此要加0
    // 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11
    var date = new Date(date)
    var month = date.getMonth() + 1
    month = month < 10 ? ('0' + month) : month
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds
  },
  /**
   * 获取一周的第几天 0~6
   * @date 2021/11/16
   * @author Louis
   * @param  {[type]} timestamp [timestamp]
   * @return {[type]}           [Number]
   */
  getDayOfWeek(timestamp) {
    var date = new Date(timestamp);
    return date.getDay();
  },
  // 度转度°分′秒″
  formatDegrees(val) {
    if (typeof (val) == "undefined" || val == "") {
        return "";
    }
    val = val + "";
    var i = val.indexOf('.');
    var strDu = i < 0 ? val : val.substring(0, i);//获取度
    var strFen = 0;
    var strMiao = 0;
    if (i > 0) {
        var strFen = "0" + val.substring(i);
        strFen = strFen * 60 + "";
        i = strFen.indexOf('.');
        if (i > 0) {
            strMiao = "0" + strFen.substring(i);
            strFen = strFen.substring(0, i);//获取分
            strMiao = strMiao * 60 + "";
            i = strMiao.indexOf('.');
            strMiao = strMiao.substring(0, i + 4);//取到小数点后面三位
            strMiao = parseFloat(strMiao).toFixed(0);//精确小数点后面两位
        }
      }
      return strDu + "°" + strFen + "′" + strMiao + "″";
    }
}
