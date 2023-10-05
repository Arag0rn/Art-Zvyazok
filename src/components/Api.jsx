import axios from "axios";

console.log('TEST PAGE');
const apiKey = "oauth2";

export const RegNewUser = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7257/api/Register/new",
        {
            "id": 0,
            "createdAt": "2023-10-05T11:22:26.581Z",
            "updatedAt": "2023-10-05T11:22:26.581Z",
            "email": "string",
            "username": "string",
            "firstName": "string",
            "lastName": "string",
            "password": "string"
          },
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": 'application/json' 
            }
        }
      );
  
      if (response.data.result === "success") {
        console.log(response.data);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Ошибка аутентификации", error);
    }
  };

  export const GetNewUser = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7257/api/User/all",
    
        {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": 'application/json' 
            }
        }
      );
  
      if (response.data.result === "success") {
        console.log(response.data);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Ошибка аутентификации", error);
    }
  };