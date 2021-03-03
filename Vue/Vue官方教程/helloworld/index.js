var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world, 2021',
        seen: false,
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    },
    methods: {
        onClick : function () {
            alert('AAAA');
        }
    }
});

app.message = 'it is my first vue program';