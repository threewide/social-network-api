const emails = [
    'testemail@email.com',
    'iamanemail@something.com'
]

const users = [
    'testemail',
    'iamanemail'
]

const thoughtTexts = [
    'The most original of thoughts!',
    'I had a thought once but I forgot it'
]

const reactions = [
    'I had that thought first',
    'I\'m jealous, I still have not had a thought!'
]

const getEmail = (int) => {
    return emails[int];
};

const getUser = (int) => {
    return users[int];
};

const getThoughtText = (int) => {
    return thoughtTexts[int];
};

const getReaction = (int) => {
    return reactions[int];
};

module.exports = {getEmail, getUser, getThoughtText, getReaction};