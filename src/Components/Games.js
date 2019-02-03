//React
import React from 'react'
//stateless component!
const Games = (props) => {
    return (
        <React.Fragment>
            {props.games.map(currGame => {
                return(
                    <p  key={`container${props.groupID}_${currGame.id}`}
                        className='card-text'>
                        {currGame.name}, type: {currGame.type}. id: {currGame.id}
                    </p>
                )
            })}
        </React.Fragment>
    )
}
export default Games