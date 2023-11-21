function add(numbers: string): number {
    return numbers
        .split(',')
        .map(x => parseInt(x, 10))
        .reduce((a, b) => a + b, 0);
}

export { add };