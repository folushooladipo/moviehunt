import * as React from "react"
import * as moment from "moment"

import { DEFAULT_MOVIE_POSTER_PATH } from "../../util/values"

interface IMovieCardProps {
    movie: Movie
}

export default class MovieCard extends React.Component<IMovieCardProps> {
    render() {
        const { title, overview, releaseDate, voteAverage, voteCount,
            posterUrl } = this.props.movie

        const trimmedTitle = title.length > 28 ?
            `${ title.slice(0, 26) }...` :
            title
        const trimmedOverview = overview.length > 80 ?
            `${overview.slice(0, 81)}...` :
            overview
        const formattedReleaseDate = moment(releaseDate).format("MMMM D, YYYY")
        const voteAveragePercentage = `${ voteAverage * 10 }%`

        return (
            <div className="movie-card-container">
                <div className="poster-image-container">
                    <img
                        src={ posterUrl || DEFAULT_MOVIE_POSTER_PATH }
                        alt={ `${ title }'s poster image.` }
                        title={ title }
                        className="poster-image"
                    />
                </div>
                <div className="movie-info-container">
                    <div className="title-and-ratings-container">
                        <div className="title-container">{ trimmedTitle }</div>
                        <div
                            title={ `${ voteAveragePercentage } of ${ voteCount } votes.`}
                            className="ratings-container"
                        >
                            <p>{ voteAveragePercentage }</p>
                            <div className="ratings-underline"></div>
                        </div>
                    </div>
                    <div className="release-date-container">
                        <div>{ formattedReleaseDate }</div>
                    </div>
                    <div className="movie-overview-container">
                        <p>{ trimmedOverview }</p>
                    </div>
                </div>
                <div className="card-bottom-background"></div>
            </div>
        )
    }
}
