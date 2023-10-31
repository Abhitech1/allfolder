import React from 'react'
import { UserContext } from './Context/UserContext'

function ClassC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                (user) => {
                    return(
                        <>
                        
                            <pre>{JSON.stringify(user)}</pre>
                        </>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ClassC