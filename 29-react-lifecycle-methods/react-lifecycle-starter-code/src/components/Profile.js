import React from 'react';


class Profile extends React.Component{


    componentDidMount(){

        console.log("profile mounted!")
      }
    componentWillUnmount(){

        console.log("profile unmounted!")
    }

    render(){
        return(


            <div>
                <h1>Hey!</h1>
            </div>
        )
    }
}

export default Profile; 