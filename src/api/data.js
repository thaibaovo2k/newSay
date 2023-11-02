
const sportData = [
    {
        name:'flash card 01',
        date: '24 August, 2023',
        status: true,
        source: require('../assets/images/Cart1.png')
    },
    {
        name:'flash card 02',
        date: '24 August, 2023',
        status: true,
        source: require('../assets/images/Cart2.png')
    }
]
const healthData = [
    {
        name:'Mini Game 01',
        date: '24 August, 2023',
        status: true,
        source: require('../assets/images/Cart3.png')
    },
    {
        name:'Mini Game 02',
        date: '24 August, 2023',
        status: false,
        source: require('../assets/images/Cart4.png')
    }
]
const gameData = [
    {
        name:'Flash Study T...',
        date: '24 August, 2023',
        status: true,
        source: require('../assets/images/Cart5.png')
    },
    {
        name:'Flash Study T...',
        date: '24 August, 2023',
        status: false,
        source: require('../assets/images/Cart6.png')
    }
]
const watchData = [
    {
        name:'Flash Study test case 20 char 01',
        date: '24 August, 2023',
        status: false,
        source: require('../assets/images/newsImg.png')
    }
]
const gameData2 = [
    {
        name:'Flash Study T...',
        date: '24 August, 2023',
        status: true,
        source: require('../assets/images/Cart7.png')
    },
    {
        name:'Flash Study T...',
        date: '24 August, 2023',
        status: false,
        source: require('../assets/images/Cart8.png')
    }
]
const wordData = [
    {
        name:'Flash Study T...',
        date: '24 August, 2023',
        status: true,
        source: require('../assets/images/Cart9.png'),
        description:'Contary to popular belief, Lorem isum is not simply random text. It has roots in a piece of classical Latin.  '
    },
    {
        name:'Flash Study T...',
        date: '24 August, 2023',
        status: false,
        source: require('../assets/images/Cart10.png'),
        description:'Contary to popular belief, Lorem isum is not simply random text. It has roots in a piece of classical Latin.  '
    }
]
const categoriesData = ["Sport", "Health", "Cartoon", "Word", "Enviroment", "Music"];
const topWordData = ["GPT", "Babyshark", "Cartoon", "Quizlet", "ReadingTime", "Wing"];

export {
    sportData,
    healthData,
    gameData,
    watchData,
    gameData2, 
    wordData,
    categoriesData,
    topWordData
}