export default [
    {
        id: 'sandworm',
        title: 'A Desert Encounter',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'sandworm.jpg',
        description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
        choices: [{
            id: 'fight',
            description: `Despite the sandworm's enormous size, you fight it.`,
            result: `
            You underestimated it's size. The sandworm dives under the dunes and emerges directly underneath you, swallowing you whole. 
        `,
            hp: -200,
            gold: 0
        }, {
            id: 'run',
            description: 'Run!!!!!',
            result: `
            You perceive the threat, turning to run away. Were you aware how thouroughly the sandworm can feel vibrations through the sand? As you run for nearby rock outcropping, the worm chases you, catching up quickly. As you leap towards the rocks, the worm throws you up into the sky. You land hard on the outcropping, hurt badly and bleeding, but miraculously still alive. You find a skeleton and some gold. How long has it been there?
        `,
            hp: -30,
            gold: 35
        }, {
            id: 'ride',
            description: 'Allow it to get closer, then climb and ride it.',
            result: `
            You jump up and down on the sand to attract it to you. As it approaches, you leap aside and use you hand as a hook, clinging to the chitinous exterior armor. You climb onto it's back and find you can pull it in the direction you desire. You ride it out to the outskirts of the desert and say your goodbyes. If you ever come back, you know how to handle yourself. Will anyone believe you?
        `,
            hp: 0,
            gold: 0
        }]
    },
    {
        id: 'ambush',
        title: 'A Fightening Village',
        map: {
            top: '17%',
            left: '37%'
        },
        image: 'fake-ambush.jpg',
        description: `
        You travel towards a nearby village. There have been complaints of creatures in the forest frightening the community. They're scared they might be killed and ask you to investigate.
    `,
        choices: [{
            id: 'fight',
            description: 'Fight them and drive them away.',
            result: `
            You brandish your weapons and strike fear in their hearts. As you run towards them they also attack. You manage somehow, but the fight takes it's toll on you. The villagers reward you for your efforts. Was it worth it?
        `,
            hp: -25,
            gold: 10
        }, {
            id: 'run',
            description: 'Too scary!',
            result: `
            You can't hold it together. "Why am I even here", you ask yourself. You question whether you even want to be an adventurer anymore. You avoid the village on the way out of the area.
        `,
            hp: 0,
            gold: 0
        }, {
            id: 'talk',
            description: 'Maybe they can be reasoned with.',
            result: `
            You've seen worse. Rather than start a fight, you strike up a converstaion, albeit from a distance. They tell you that they've been trying to make friends with the villagers and that they don't mean anyone any harm. They just want more friends. You have a long dialogue about fear, judgment, and prejudice and feel for them. You suggest they look for other friendly "monsters". You wish humans had more love in their hearts. The monsters thank you and reward you for your kindness.
        `,
            hp: 0,
            gold: 100
        }]
    },
    {
        id: 'treasure',
        title: 'A treasure hunt',
        map: {
            top: '31%',
            left: '5%'
        },
        image: 'treasure-map-x.jpg',
        description: `
        You find a treasure map that shows part of the northern territories of the continent. You journey there, but unfortunately only have time to chose 1 of the 3 treasure locations.
    `,
        choices: [{
            id: 'left',
            description: 'The south-west treasure.',
            result: 'You find a chest, and inside is 80 gold pieces!',
            hp: 0,
            gold: 80
        }, {
            id: 'top',
            description: 'The northern most treasure.',
            result: `You find yourself in a deep tundra. After searching for a long time, you find a chest. Within is a small bag of gold and a potion of some kind. After drinking it, you feel a warmth come over you, feeling better than you've felt in ages.`,
            hp: 10,
            gold: 10
        }, {
            id: 'right',
            description: 'The eastern treasure. That looks like a good one.',
            result: `Oh no! It looks like it wasn't! Someone got here first and left an empty whole. You fell in and hurt your leg.`,
            hp: -10,
            gold: 0
        }]
    }
];