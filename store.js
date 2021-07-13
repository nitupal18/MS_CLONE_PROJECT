import * as constants from "./constants.js";
//when the connection is just established everything will be null. we created store for state management
let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  screenSharingActive: false, //screen sharing can only happen in the middle of the call,hence at start it is false
  screenSharingStream: null,
  allowConnectionsFromStrangers: false, // we cant allow starngers to be in call as we open the app
  callState: constants.callState.CALL_AVAILABLE_ONLY_CHAT,
};


// here we will be assigning new state to all our objects by using set operator
export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
};

export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream,
  };
};

export const setAllowConnectionsFromStrangers = (allowConnection) => {
  state = {
    ...state,
    allowConnectionsFromStrangers: allowConnection,
  };
};

export const setScreenSharingActive = (screenSharingActive) => {
  state = {
    ...state,
    screenSharingActive,
  };
};

export const setScreenSharingStream = (stream) => {
  state = {
    ...state,
    screenSharingStream: stream,
  };
};

export const setRemoteStream = (stream) => {
  state = {
    ...state,
    remoteStream: stream,
  };
};

export const setCallState = (callState) => {
  state = {
    ...state,
    callState,
  };
};
//this function will return the changed state
export const getState = () => {
  return state;
};
