
export const MODES = {
    start: 'start',
    playing: 'playing',
    done: 'done'
};

export const TYPES = {
    opponent: 'Opponent',
    computer: 'Computer'
};

export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const CHOICES = [
    'Rock', 'Paper', 'Scissors'
];

export const determineWinner = (pickOne, pickTwo) => {
    if (pickOne === pickTwo) {
        return false;
    }

    const computerCovering = CHOICES[(CHOICES.indexOf(pickTwo) + 1) % CHOICES.length];
    return pickOne === computerCovering ? 'player' : 'computer';
}
