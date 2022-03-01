function charIsNumber(char: string): boolean {
    return Number.isInteger(Number.parseInt(char));
}

export default charIsNumber