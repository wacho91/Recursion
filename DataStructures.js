function Queue() {
    this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
    return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
    return this.array.shift();
};

Queue.prototype.size = function () {
    return this.array.length;
};

Queue.prototype.isEmpty = function () {
    return this.size === 0;
};

module.exports = {
    Queue,
};
