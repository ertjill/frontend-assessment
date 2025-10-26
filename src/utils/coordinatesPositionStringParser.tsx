export interface ParsedInput {
    x: number;
    y: number;
    direction: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
}

export const coordinatesPositionStringParser = (input: string): ParsedInput => {
    //Check if input is empty
    if (!input) throw new Error('Input cannot be empty.');
    //If input is not empty, parse it
    const parts = input.trim().toUpperCase().split(/[\s,]+/);
    //Check if input is in the correct format
    if (parts.length !== 3) {
        throw new Error('Input must be in the format "x, y direction" (e.g., "1, 2 EAST").');
    }
    //If input is in the correct format, parse it
    const [xStr, yStr, direction] = parts;
    
    const x = Number(xStr);
    const y = Number(yStr);
    //Check if x and y are valid numbers
    if (Number.isNaN(x) || Number.isNaN(y)) {
        throw new Error('x and y must be valid numbers.');
    }
    //Check if x and y are within the grid
    if (x < 0 || x > 4 || y < 0 || y > 4) {
        throw new Error('x and y must be between 0 and 4.');
    }
    //Check if direction is valid
    const validDirections = ['NORTH', 'SOUTH', 'EAST', 'WEST'] as const;
    if (!validDirections.includes(direction as any)) {
        throw new Error(`Direction must be one of: ${validDirections.join(', ')}`);
    }
    //If input is valid, return it
    return { x, y, direction: direction as ParsedInput['direction'] };
}