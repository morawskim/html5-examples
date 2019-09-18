const update = require('immutability-helper');

const card = {
    name: 'todo tasks',
    tasks: [
        {id: 1, title: 'Fix bug #123', finished: false, tags: ['bug']},
        {id: 2, title: 'Reformat code', finished: true, tags: ['low']},
        {id: 3, title: 'Delete file example.js', finished: false, tags: ['feature', 'urgent']},
    ]
};

let result = update(card, {
    tasks: {
        0: {
            $toggle: ['finished']
        }
    }
});
console.log("finish task #1");
console.log(result);

result = update(card, {
    tasks: {
        1: {
            tags: {$push: ['reformat']}
        }
    }
});
console.log("add reformat tag to task #2");
console.log(result.tasks[1]);

result = update(card, {
    name: {
        $set: "nowa nazwa karty"
    }
});
console.log("Change card name");
console.log(result);

result = update(card, {
    tasks: {
        1: {
            $unset: ['tags']
        }
    }
});
console.log("remove tags property from task #2");
console.log(result.tasks[1]);

result = update(card, {
    tasks: {
        1: {
            tags: {$unshift: ['reformat']}
        }
    }
});
console.log("prepend reformat tag to task #2");
console.log(result.tasks[1]);

result = update(card, {
    tasks: {
        2: {
            title: {$apply: (title) => title.toUpperCase()}
        }
    }
});
console.log("change title of task #3 to uppercase");
console.log(result);

result = update(card, {
    tasks: {
        2: {
            $merge: {'inProgress': true}
        }
    }
});
console.log("add new property to task #3");
console.log(result);


result = update(card, {
    tasks: {
        2: {
            tags: {$splice: [[1]]}
        }
    }
});
console.log("remove tag urgent from task #3");
console.log(result.tasks[2]);
