
Vue.component('task-list', { //task lijst hier
    template: `
            <div>
                <h1>Tasks</h1>
                <task v-for="task in tasks" @setDone="completeTask(task)">{{task.description}}</task>
            </div>
            `,

    data() {
        return {
            tasks: [
                { "description": 'Naar de winkel gaan', completed: true },
                { "description": 'Mail beantwoorden', completed: false },
                { "description": 'Computer fixen', completed: false },
            ]
        }
    },

    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push({
                    title: this.newTask,
                    completed: false
                });
                this.newTask = '';
            }
        },
        completeTask(task) {
            task.completed = !task.completed;
        },
    }

});

Vue.component('task', {
    template: `
    <li ><slot></slot><button @click.self="$emit('setDone')">x</button></li>
    `
})

new Vue({
    el: '#app'
})




