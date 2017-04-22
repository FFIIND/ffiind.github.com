/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-20 22:20:50
 * @version $Id$
 */
$(function() {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('YY-MM-DD') + ' - ' + end.format('YY-MM-DD'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            '今日': [moment(), moment()],
            '近7天': [moment().subtract(6, 'days'), moment()],
            '近30天': [moment().subtract(29, 'days'), moment()],
            '本月': [moment().startOf('month'), moment().endOf('month')],
            '上个月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

    // $('#table').bootstrapTable({
    //     columns: [{
    //         field: 'id',
    //         title: 'Item ID'
    //     }, {
    //         field: 'name',
    //         title: 'Item Name'
    //     }, {
    //         field: 'price',
    //         title: 'Item Price'
    //     }],
    //     data: [{
    //         id: 1,
    //         name: 'Item 2',
    //         price: '$2'
    //     }, {
    //         id: 2,
    //         name: 'Item 1',
    //         price: '$1'
    //     }, {
    //         id: 3,
    //         name: 'Item 0',
    //         price: '$3'
    //     }],
    //     sortable: true,
    //     sortName: 'price'
    // });
});