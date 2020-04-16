import React from 'react';

const WaitingRoom = ({ users }) => {
    return (
        <div>
            <div>
                <h1>Wait here while everyone joins ...</h1>
            </div>
        { users
         ? (
            <div>
                <h2>
                    {users.map(({ name, icon, color }) => {
                        return (
                            <div key={name}>
                                {icon}/{color}: {name} is here!
                            </div>
                        )
                    })}
                </h2>
            </div>
         )
        
        : null }
        
        <Button type="submit" text="EVERYONE IS HERE" handleClick={(event) => handleClick(event)}/>
    </div>
    )
}

export default WaitingRoom;