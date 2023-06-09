const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if(blogs.length === 0){
        return 0
    }
    let total = 0
    blogs.forEach(n => {
        total = total + n.likes
    })
    return total
}

const favouriteBlogs = (blogs) => {
    if(blogs.length === 0){
        return 0
    }
    let favourite = blogs[0]
    blogs.forEach(n => {
        if(n.likes > favourite.likes){
            favourite = n
        }
    })
    return favourite
}

module.exports = {
    dummy, totalLikes, favouriteBlogs
}