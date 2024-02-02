// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.22;

/*
__/\\\\\\\\\\\\\\\_____/\\\\\\\\\_____/\\\\\\\\\\\\\____/\\\\\\\\\\\_______/\\\\\_____________/\\\\\\\\\_____/\\\\\\\\\____        
 _\///////\\\/////____/\\\\\\\\\\\\\__\/\\\/////////\\\_\/////\\\///______/\\\///\\\________/\\\////////____/\\\\\\\\\\\\\__       
  _______\/\\\________/\\\/////////\\\_\/\\\_______\/\\\_____\/\\\_______/\\\/__\///\\\____/\\\/____________/\\\/////////\\\_      
   _______\/\\\_______\/\\\_______\/\\\_\/\\\\\\\\\\\\\/______\/\\\______/\\\______\//\\\__/\\\_____________\/\\\_______\/\\\_     
    _______\/\\\_______\/\\\\\\\\\\\\\\\_\/\\\/////////________\/\\\_____\/\\\_______\/\\\_\/\\\_____________\/\\\\\\\\\\\\\\\_    
     _______\/\\\_______\/\\\/////////\\\_\/\\\_________________\/\\\_____\//\\\______/\\\__\//\\\____________\/\\\/////////\\\_   
      _______\/\\\_______\/\\\_______\/\\\_\/\\\_________________\/\\\______\///\\\__/\\\_____\///\\\__________\/\\\_______\/\\\_  
       _______\/\\\_______\/\\\_______\/\\\_\/\\\______________/\\\\\\\\\\\____\///\\\\\/________\////\\\\\\\\\_\/\\\_______\/\\\_ 
        _______\///________\///________\///__\///______________\///////////_______\/////_____________\/////////__\///________\///__

*/

abstract contract BaseUsdoTokenMsgType {
    uint16 internal constant MSG_YB_APPROVE_ASSET = 600; // Use for YieldBox 'setApprovalForAsset(true)' operation
    uint16 internal constant MSG_YB_APPROVE_ALL = 601; // Use for YieldBox 'setApprovalForAll(true)' operation
    uint16 internal constant MSG_MARKET_PERMIT = 602; // Use for market.permitLend() operation

    uint16 internal constant MSG_MARKET_REMOVE_ASSET = 900; // Use for remove asset from a market available on another chain
    uint16 internal constant MSG_YB_SEND_SGL_LEND_OR_REPAY = 901; // Use to YB deposit, lend/repay on a market available on another chain
    uint16 internal constant MSG_LEVERAGE_MARKET_UP = 902; // Use for leverage buy on a market available on another chain
    uint16 internal constant MSG_TAP_EXERCISE = 903; // Use for exercise options on tOB available on another chain
}
