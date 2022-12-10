let color ="green";

chrome.runtime.onInstalled.addListener(() => {

chrome.storage.sync.set({color});
console.log('Default background Color set to ${color}');

});