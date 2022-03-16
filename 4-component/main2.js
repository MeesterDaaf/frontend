
Vue.component('task-list', { //task lijst hier
    template: `
            <div>
                <task v-for="task in tasks">{{task.description}}</task>
            </div>`,

    data() {
        return {
            tasks: [
                { "description": 'Naar de winkel gaan', completed: true },
                { "description": 'Mail beantwoorden', completed: false },
                { "description": 'Computer fixen', completed: false },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot>'
})

new Vue({
    el: '#app'
})