import React from "react";

let initalState ={
    img:[
        {id: 0, url: "./Img/image-bac-item.jpg" , colorTxt: "#fff"},
        {id: 1, url: "./Img/image-bac-item-1.jpg", colorTxt: "#fff"},
        {id: 2, url: "./Img/image-bac-item-2.jpg", colorTxt: "#000"},
        {id: 3, url: "./Img/image-bac-item-3.jpg", colorTxt: "#000"},
        {id: 4, url: "./Img/image-bac-item-4.webp", colorTxt: "#fff"},
        {id: 5, url: "./Img/image-bac-item-5.jpg", colorTxt: "#000"},

    ]
}

const authReducer = (state = initalState , action) =>{
	switch(action.type){
    case "SET-USER-AUTH":
      return{
        ...state,
        ...action.data
      }
    case "ERR-LOGIN":
      return{
        ...state,
        loginStatus:action.loginStatus,
      }
    default:
    	return state;
  }
}

export const authAC = {
  AuthMeAction(userId,login,email,isAuth){
    return {
      type:"SET-USER-AUTH",
      data:{userId,login,email,isAuth}
    }
  },
  errLogin(loginStatus){
    return{
      type:"ERR-LOGIN",
      loginStatus:loginStatus,
    }
  }
}


export default authReducer;
