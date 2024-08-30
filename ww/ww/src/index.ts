type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

const tasks: Task[] = [];
let nextId = 1;

const addTask = (title: string, description: string): void => {
    const newTask: Task = {
        id: nextId++,
        title,
        description,
        completed: false,
    };
    tasks.push(newTask);
};

const removeTask = (id: number): void => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    } else {
        console.log(`Task with id ${id} not found.`);
    }
};

const markTaskAsCompleted = (id: number): void => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
    } else {
        console.log(`Task with id ${id} not found.`);
    }
};

const listTasks = (): void => {
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Completed: ${task.completed}`);
    });
};

const listCompletedTasks = (): void => {
    tasks.filter(task => task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
    });
};

const listPendingTasks = (): void => {
    tasks.filter(task => !task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
    });
};

// Тестирование

addTask('Task 1', 'Description for Task 1');
addTask('Task 2', 'Description for Task 2');
addTask('Task 3', 'Description for Task 3');

markTaskAsCompleted(1);
markTaskAsCompleted(3);

console.log('All tasks:');
listTasks();

console.log('\nCompleted tasks:');
listCompletedTasks();

console.log('\nPending tasks:');
listPendingTasks();

removeTask(2);

console.log('\nAll tasks after removal:');
listTasks();
