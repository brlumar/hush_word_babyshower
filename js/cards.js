const cardData = [
    {
        guessWord: 'diaper',
        tabooWords: [
            { buzzword: 'baby' },
            { buzzword: 'change' },
            { buzzword: 'nappy' },
            { buzzword: 'cloth' },
        ]
    },
    {
        guessWord: 'stroller',
        tabooWords: [
            { buzzword: 'walk' },
            { buzzword: 'push' },
            { buzzword: 'baby' },
            { buzzword: 'carriage' },
        ]
    },
    {
        guessWord: 'bottle',
        tabooWords: [
            { buzzword: 'milk' },
            { buzzword: 'nipple' },
            { buzzword: 'drink' },
            { buzzword: 'formula' },
        ]
    },
    {
        guessWord: 'pacifier',
        tabooWords: [
            { buzzword: 'soothe' },
            { buzzword: 'suck' },
            { buzzword: 'comfort' },
            { buzzword: 'teether' },
        ]
    },
    {
        guessWord: 'onesie',
        tabooWords: [
            { buzzword: 'baby' },
            { buzzword: 'outfit' },
            { buzzword: 'snaps' },
            { buzzword: 'romper' },
        ]
    },
    {
        guessWord: 'crib',
        tabooWords: [
            { buzzword: 'baby' },
            { buzzword: 'sleep' },
            { buzzword: 'cot' },
            { buzzword: 'bed' },
        ]
    },
    {
        guessWord: 'rattle',
        tabooWords: [
            { buzzword: 'noise' },
            { buzzword: 'shake' },
            { buzzword: 'toy' },
            { buzzword: 'infant' },
        ]
    },
    {
        guessWord: 'baby powder',
        tabooWords: [
            { buzzword: 'fragrance' },
            { buzzword: 'talc' },
            { buzzword: 'soften' },
            { buzzword: 'puff' },
        ]
    },
    {
        guessWord: 'baby shower',
        tabooWords: [
            { buzzword: 'celebrate' },
            { buzzword: 'gifts' },
            { buzzword: 'party' },
            { buzzword: 'expecting' },
        ]
    },
    {
        guessWord: 'nursery',
        tabooWords: [
            { buzzword: 'room' },
            { buzzword: 'decor' },
            { buzzword: 'baby' },
            { buzzword: 'furniture' },
        ]
    },
    {
        guessWord: 'baby monitor',
        tabooWords: [
            { buzzword: 'sound' },
            { buzzword: 'camera' },
            { buzzword: 'parent' },
            { buzzword: 'crib' },
        ]
    },
    {
        guessWord: 'binky',
        tabooWords: [
            { buzzword: 'pacifier' },
            { buzzword: 'soothe' },
            { buzzword: 'baby' },
            { buzzword: 'comfort' },
        ]
    },
    {
        guessWord: 'baby lotion',
        tabooWords: [
            { buzzword: 'soft' },
            { buzzword: 'skin' },
            { buzzword: 'moisturize' },
            { buzzword: 'fragrance' },
        ]
    },
    {
        guessWord: 'baby food',
        tabooWords: [
            { buzzword: 'eat' },
            { buzzword: 'puree' },
            { buzzword: 'jar' },
            { buzzword: 'taste' },
        ]
    },
    {
        guessWord: 'baby blanket',
        tabooWords: [
            { buzzword: 'warm' },
            { buzzword: 'snuggle' },
            { buzzword: 'soft' },
            { buzzword: 'cover' },
        ]
    },
    {
        guessWord: 'baby wipes',
        tabooWords: [
            { buzzword: 'clean' },
            { buzzword: 'diaper' },
            { buzzword: 'moist' },
            { buzzword: 'sanitizing' },
        ]
    },
    {
        guessWord: 'bath',
        tabooWords: [
            { buzzword: 'tub' },
            { buzzword: 'clean' },
            { buzzword: 'water' },
            { buzzword: 'splash' },
        ]
    },
    {
        guessWord: 'baby carrier',
        tabooWords: [
            { buzzword: 'wear' },
            { buzzword: 'sling' },
            { buzzword: 'parent' },
            { buzzword: 'hands-free' },
        ]
    },
    {
        guessWord: 'teething',
        tabooWords: [
            { buzzword: 'gums' },
            { buzzword: 'chew' },
            { buzzword: 'pain' },
            { buzzword: 'tooth' },
        ]
    },
    {
        guessWord: 'giggles',
        tabooWords: [
            { buzzword: 'laugh' },
            { buzzword: 'joy' },
            { buzzword: 'sound' },
            { buzzword: 'happy' },
        ]
    },
    {
        guessWord: 'mobile',
        tabooWords: [
            { buzzword: 'hanging' },
            { buzzword: 'music' },
            { buzzword: 'rotate' },
            { buzzword: 'entertain' },
        ]
    },
    {
        guessWord: 'nursery rhyme',
        tabooWords: [
            { buzzword: 'song' },
            { buzzword: 'child' },
            { buzzword: 'verse' },
            { buzzword: 'lullaby' },
        ]
    },
    {
        guessWord: 'diaper bag',
        tabooWords: [
            { buzzword: 'carry' },
            { buzzword: 'essentials' },
            { buzzword: 'travel' },
            { buzzword: 'parent' },
        ]
    },
    {
        guessWord: 'bib',
        tabooWords: [
            { buzzword: 'mealtime' },
            { buzzword: 'spill' },
            { buzzword: 'protect' },
            { buzzword: 'neck' },
        ]
    },
    {
        guessWord: 'swaddle',
        tabooWords: [
            { buzzword: 'wrap' },
            { buzzword: 'blanket' },
            { buzzword: 'comfort' },
            { buzzword: 'sleep' },
        ]
    },
    {
        guessWord: 'footprint',
        tabooWords: [
            { buzzword: 'ink' },
            { buzzword: 'memory' },
            { buzzword: 'keepsake' },
            { buzzword: 'print' },
        ]
    },
    {
        guessWord: 'ultrasound',
        tabooWords: [
            { buzzword: 'image' },
            { buzzword: 'pregnancy' },
            { buzzword: 'baby' },
            { buzzword: 'scan' },
        ]
    },
    {
        guessWord: 'sleep',
        tabooWords: [
            { buzzword: 'dream' },
            { buzzword: 'night' },
            { buzzword: 'crib' },
            { buzzword: 'peaceful' },
        ]
    },
    {
        guessWord: 'cuddles',
        tabooWords: [
            { buzzword: 'snuggle' },
            { buzzword: 'love' },
            { buzzword: 'hug' },
            { buzzword: 'warmth' },
        ]
    },
    {
        guessWord: 'high chair',
        tabooWords: [
            { buzzword: 'eat' },
            { buzzword: 'meal' },
            { buzzword: 'seat' },
            { buzzword: 'toddler' },
        ]
    },
    {
        guessWord: 'laugh',
        tabooWords: [
            { buzzword: 'giggle' },
            { buzzword: 'joy' },
            { buzzword: 'sound' },
            { buzzword: 'happy' },
        ]
    },
    {
        guessWord: 'bath time',
        tabooWords: [
            { buzzword: 'water' },
            { buzzword: 'splish-splash' },
            { buzzword: 'clean' },
            { buzzword: 'tub' },
        ]
    },
    {
        guessWord: 'first steps',
        tabooWords: [
            { buzzword: 'walk' },
            { buzzword: 'toddler' },
            { buzzword: 'milestone' },
            { buzzword: 'balance' },
        ]
    },
    {
        guessWord: 'bedtime story',
        tabooWords: [
            { buzzword: 'book' },
            { buzzword: 'read' },
            { buzzword: 'night' },
            { buzzword: 'imagination' },
        ]
    },
    {
        guessWord: 'playdate',
        tabooWords: [
            { buzzword: 'friend' },
            { buzzword: 'parent' },
            { buzzword: 'socialize' },
            { buzzword: 'toys' },
        ]
    },
    {
        guessWord: 'nursery',
        tabooWords: [
            { buzzword: 'room' },
            { buzzword: 'changing table' },
            { buzzword: 'rocker' },
            { buzzword: 'furniture' },
        ]
    },
    {
        guessWord: 'announcement',
        tabooWords: [
            { buzzword: 'news' },
            { buzzword: 'reveal' },
            { buzzword: 'pregnancy' },
            { buzzword: 'surprise' },
        ]
    },
    {
        guessWord: 'ultrasound',
        tabooWords: [
            { buzzword: 'image' },
            { buzzword: 'pregnancy' },
            { buzzword: 'baby' },
            { buzzword: 'scan' },
        ]
    }
]