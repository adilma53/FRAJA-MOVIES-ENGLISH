const TMDB_URL = 'https://api.themoviedb.org/3';

const URL = 'https://fraja-movies-english-api.vercel.app/api';

// const URL = "http://localhost:3000/api";

// PROFILE ENDPOINTS //
// ------------------//

//PROFILE AUTHENTICATION
export const SIGN_UP = `${URL}/signup`;
export const LOG_IN = `${URL}/login`;
export const SIGN_OUT = `${URL}/logout`;
export const TOKEN = `${URL}/profile?token=`;

// COLLECTION
const userId = '654170e693dc3bcf415f9a02';

export const CREATE_COLLECTION = `${URL}/user/${userId}/createcollection`;
export const DELETE_COLLECTION = `${URL}/user/${userId}/deletecollection?collection_id=`;
export const GET_COLLECTION_SHOWS = `${URL}/user/${userId}/getcollectionshows?collection_id=`;
export const UPDATE_COLLECTION = `${URL}/user/${userId}/updatecollection/update?collection_id=`;
export const GET_USER_COLLECTIONS = `${URL}/user/${userId}/getusercollections`;

// get user
export const GET_USER = `${URL}/user`;

// -------------
export const ADD_SHOW_TO_COLLECTION = `${URL}/user/${userId}/updatecollection/addshow?collection_id=`;
export const DELETE_SHOW_FROM_COLLECTION = `${URL}/user/${userId}/updatecollection/deleteshow?collection_id=`;

// //EDIT PROFILE
// export const UPDATE_PROFILE = `${URL}/profile/edit`;
// export const UPLOAD_AVATAR = `${URL}/profile/upload-avatar`;
// // FOLLOW/UNFOLLOW
// export const FOLLOW_ID = `${URL}/profile/follow?id=`;
// export const FOLLOW_NAME = `${URL}/profile/follow?username=`;
// export const UNFOLLOW_ID = `${URL}/profile/unfollow?id=`;
// export const UNFOLLOW_NAME = `${URL}/profile/unfollow?username=`;
// // GET PROFILES
// export const GET_CURRENT_PROFILE = `${URL}/profile/current`;
// export const GET_ALL_PROFILES = `${URL}/profile?page=`;
// export const GET_PROFILE_USERNAME = `${URL}/profile?username=`;
// export const GET_PROFILE_ID = `${URL}/profile?id=`;

// //PROFILE BOOKMARK
// export const ADD_BOOKMARK = `${URL}/profile/bookmark/add?id=`;
// export const REMOVE_BOOKMARK = `${URL}/profile/bookmark/remove?id=`;
// export const GET_BOOKMARK = `${URL}/profile/bookmarks`;

// //  TWEET ENDPOINTS  //
// // ------------------//
// export const NEW_TWEET = `${URL}/tweet/new`;
// export const RETWEET = `${URL}/tweet/retweet?id=`;

// // TWEET EDIT
// export const EDIT_TWEET = `${URL}/tweet/edit?id=`;
// export const DELETE_TWEET = `${URL}/tweet/delete?id=`;

// //TWEET LIKE
// export const LIKE_TWEET = `${URL}/tweet/like?id=`;
// export const UNLIKE_TWEET = `${URL}/tweet/unlike?id=`;

// // TWEET COMMENT
// export const NEW_REPLY = `${URL}/tweet/reply/new?id=`;
// export const DELETE_COMMENT = `${URL}/tweet/reply/delete?id=`;

// // GET TWEETS
// export const GET_ALL_TWEETS = `${URL}/tweet?page=`;
// export const GET_PROFILE_TWEETS = `${URL}/tweet/profile?username=`;
// export const GET_TWEET_ID = `${URL}/tweet?id=`;
// export const GET_FOLLOWING_TWEETS = `${URL}/tweet/following?page=`;
