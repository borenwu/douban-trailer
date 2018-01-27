const rp = require('request-promise-native');

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

    const res = await rp(url)

    return res
};

(async ()=>{
    let movies = [
        { doubanId: 27180210,
            title: '圆桌派 第三季',
            rate: 9,
            poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2511834818.jpg'
        },
        { doubanId: 26901443,
            title: '母亲',
            rate: 8.4,
            poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2509654831.jpg'
        },
    ]

    movies.map(async movie => {
        let movieData = await fetchMovie(movie)

        try{
            movieData = JSON.parse(movieData)
            console.log(movieData.title)
            console.log(movieData.summary)
        }catch(err){
            console.log(err)
        }
        console.log(movieData)
    })

})()