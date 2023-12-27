const listHelper = require('../utils/list_helper')

test('4.3dummy returns one', async () => {
    const blogs = []
    const result = listHelper.dummy(blogs)
});

describe('4.4total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ];

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog);
        expect(result).toBe(5);
    });
});


describe('4.5favoriteBlog', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '1sd2aa71b54a676234d1743',
            title: 'bad pencil',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Cwqerqwerarmful.html',
            likes: 6,
            __v: 0
        },
        {
            _id: '5462aa71b54a676234d1712',
            title: 'Good Apple',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/qwerwqrred_Harmful.html',
            likes: 7,
            __v: 0
        },
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 10,
            __v: 0
        }
    ];

    test('favoriteBlog who is', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog);
        expect(result.likes).toBe(10);
    });
});


describe('4.6 4.7  mostBlog', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'AAA_WQER',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '1sd2aa71b54a676234d1743',
            title: 'bad pencil',
            author: 'AAA_WQER',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Cwqerqwerarmful.html',
            likes: 6,
            __v: 0
        },
        {
            _id: '5462aa71b54a676234d1712',
            title: 'Good BLACK Apple',
            author: 'AAA_WQER',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/qwerwqrred_Harmful.html',
            likes: 7,
            __v: 0
        },
        {
            _id: 'JRTYHaa71b54a676234d17f8',
            title: 'Go  WHTIE To Statement Considered Harmful',
            author: 'AAA_WQER',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 12,
            __v: 0
        },
        {
            _id: '65782aa71b54a676234d17f8',
            title: 'Go BACK Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 11,
            __v: 0
        },
        {
            _id: '56462aa71b532676234d17f8',
            title: 'Go DOWN Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 16,
            __v: 0
        }
    ];

    test('mostBlog', () => {
        const result = listHelper.mostBlog(listWithOneBlog);
        expect(result.author).toBe('AAA_WQER');
        expect(result.blogs).toBe(4);
    });

    test('mostLikes', () => {
        const result = listHelper.mostLikes(listWithOneBlog);
        expect(result.author).toBe('AAA_WQER');
        expect(result.likes).toBe(30);
    });
});
