import movies from '../database/movies';

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (a, {id}) => {
            return movies.find((movie) => movie.id === id);
        },
    },
    Mutation: {
        addMovie: (_, {name, rating}) => {
            if (movies.find(movie => movie.name === name)) {
                throw new Error("이미 존재하는 영화입니다")
            }

            const newMovie = {
                id: movies.length + 1,
                name,
                rating
            }
            movies.push(newMovie);
            return newMovie
        }
    }
}

export default resolvers;