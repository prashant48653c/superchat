import axios  from 'axios'
import { headers } from 'next/headers';

const server_url=process.env.SERVER_URL;

// Fetch all the users of the app with pagination
async function fetchUsers(){
  try {
    const query=`
    query{
    getUser{
    id
    username
    fullName
    profilePicture
    }
    }`;
    const users= await axios.post(`${server_url}/graphql`,{query},
        {
            headers:{
                'Content-Type':'application/json'
            }
        }
    )
    const data=users.data.data.getUser;
    console.log("User fetched : ",data);
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}



// Fetch all the friend of the user

async function fetchFriends(){
    try {
      const query=`query{
      getFriends{
      id
      
      profilePicture
      fullName
      username

      }
      }`;

      const response=await axios.post(`${server_url}/graphql`,{query},{
        headers:{
            "Content-Type":"application/json"
        }
      });

      const data=response.data.data.getFriends;
      return data;
    } catch (error) {
      
    }
  }

 



// Provide a friend request to a user

  async function addFriend(){
    try {
      
    } catch (error) {
      
    }
  }


  //accept or decline the friendrequest
  async function acceptFriendReq(){
    try {
      
    } catch (error) {
      
    }
  }


  // Unfriend a friend

  async function deleteFriend(){
    try {
      
    } catch (error) {
      
    }
  }



  // User creation, login and update

 // Login the user

    async function loginUser(){
        try {
          
        } catch (error) {
          
        }
      }


//Signup or register new user

  async function signUpUser(fullName:string,password:string,email:string){
    try {
      const query = `
      mutation SignUp($fullName: String!, $password: String!, $email: String!) {
        signUp(fullName: ${fullName}, password: ${password}, email: ${email}) {
          newUser {
            id
            username
            email
            fullName
          }
          accessToken
        }
      }
    `;

    const variable={fullName,email,password};
    const res=await axios.post(`${server_url}/graphql`,{query,variable},{headers:{'Content-Type':'application/json'}});
    console.log("Data: ",res);
    return res.data;
    } catch (error) {
      console.log("Error while signup: ",error)
    }
  }

  // Update the profile of the user

  async function updateProfile( ){
    try {
      const query=`mutation`
    } catch (error) {
      
    }
  }