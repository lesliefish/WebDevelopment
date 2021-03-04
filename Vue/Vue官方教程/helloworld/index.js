Vue.component('c-item', {
    props:['something'],
    template: '<div class="redDiv">{{ something.text }}</div>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world, 2021',
        seen: false,
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ],
        inputData: "just fly .",
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ],
        bindId:"myDiv"
    },
    methods: {
        onClick: function () {
            alert('AAAA');
        }
    }
});

app.message = 'it is my first vue program';