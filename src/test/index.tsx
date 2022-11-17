const myanimelist = [
    { id: 1, name: 'Mushi-Shi', genre: 'Mystery', rating: 28, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 2, name: 'Barakamon', genre: 'Slice of Life', rating: 12, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 3, name: 'Demon Slayer', genre: 'Fantasy', rating: 26, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 4, name: 'Naruto', genre: 'Fantasy', rating: 500, streamingOn: 'crunchy roll', yearOfRelease: '2009' },
    { id: 5, name: 'Saint Onisan', genre: 'Slice of Life', rating: 8, streamingOn: 'wathcing', yearOfRelease: '2009' },
    { id: 6, name: 'Avatar : The Last Air-Bender', genre: 'Fantasy', rating: 61, streamingOn: 'ani-cli', yearOfRelease: '2009' },
    { id: 7, name: 'Mushi-Shi', genre: 'Mystery', rating: 28, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 8, name: 'Barakamon', genre: 'Slice of Life', rating: 12, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 9, name: 'Demon Slayer', genre: 'Fantasy', rating: 26, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 10, name: 'Naruto', genre: 'Fantasy', rating: 500, streamingOn: 'crunchy roll', yearOfRelease: '2009' },
    { id: 11, name: 'Saint Onisan', genre: 'Slice of Life', rating: 8, streamingOn: 'wathcing', yearOfRelease: '2009' },
    { id: 12, name: 'Avatar : The Last Air-Bender', genre: 'Fantasy', rating: 61, streamingOn: 'ani-cli', yearOfRelease: '2009' },
    { id: 13, name: 'Mushi-Shi', genre: 'Mystery', rating: 28, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 14, name: 'Barakamon', genre: 'Slice of Life', rating: 12, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 15, name: 'Demon Slayer', genre: 'Fantasy', rating: 26, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 16, name: 'Naruto', genre: 'Fantasy', rating: 500, streamingOn: 'crunchy roll', yearOfRelease: '2009' },
    { id: 17, name: 'Saint Onisan', genre: 'Slice of Life', rating: 8, streamingOn: 'wathcing', yearOfRelease: '2009' },
    { id: 18, name: 'Avatar : The Last Air-Bender', genre: 'Fantasy', rating: 61, streamingOn: 'ani-cli', yearOfRelease: '2009' },
    { id: 19, name: 'Mushi-Shi', genre: 'Mystery', rating: 28, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 20, name: 'Barakamon', genre: 'Slice of Life', rating: 12, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 21, name: 'Demon Slayer', genre: 'Fantasy', rating: 26, streamingOn: 'netflix', yearOfRelease: '2009' },
    { id: 22, name: 'Naruto', genre: 'Fantasy', rating: 500, streamingOn: 'crunchy roll', yearOfRelease: '2009' },
    { id: 23, name: 'Saint Onisan', genre: 'Slice of Life', rating: 8, streamingOn: 'wathcing', yearOfRelease: '2009' },
    { id: 24, name: 'Avatar : The Last Air-Bender', genre: 'Fantasy', rating: 61, streamingOn: 'ani-cli', yearOfRelease: '2009' },
]

export const feeder = (itemsPerPage: number, pageNumber: number) => {
    return {
        data: myanimelist.slice(pageNumber * itemsPerPage, pageNumber * itemsPerPage + itemsPerPage),
        totalPages: Math.round(myanimelist.length / itemsPerPage)
    }
}