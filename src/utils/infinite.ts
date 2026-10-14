function* generator(): Generator<number, never, unknown> {
    let i = 0;
    while (true) {
        yield i;
        i += 1;
    }
}

/**
 * Generator for sequence of integers starting at 0
 */
export const infinite = () => {
    const gen = generator();
    return () => gen.next().value;
}

