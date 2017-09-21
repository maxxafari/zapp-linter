'use babel';

//import ZappLinterView from './zapp-linter-view';
import { CompositeDisposable } from 'atom';
import request from 'request'

import provider from './provider';

export default {

  zappLinterView: null,
  modalPanel: null,
  subscriptions: null,

  activate() {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'zapp-linter:zapp': () => this.zapp()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
    console.log("Zapper off...");
  },
  // hejhallå
  zapp() {
    const wordsToZappOn = ["costn", "cosnt"];
    if (editor = atom.workspace.getActiveTextEditor()) {

      this.subscriptions.add(editor.onDidStopChanging((changeEvents)=>{
        //console.log("text: [", changeEvents.changes[0].newText + "]");
        try{
          if(wordsToZappOn.indexOf(changeEvents.changes[0].newText.trim()) >= 0){
            this.sendZappReqest();
          }
        }
        catch(err){
          console.log("zapp error:", err);
        }
      }));
      console.log("zapper is on");
    }

    //this.sendZappReqest();
  },

  sendZappReqest(){
    request('http://localhost:3000/zapp',(error, response, body) => {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    })
  }

};
