import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SkynetClient, genKeyPairFromSeed } from 'skynet-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{

  //References to elements on page
  @ViewChild('send-data-input') sendDataInputElement : ElementRef; //Your "send data" input
  @ViewChild('receiver-input') receiverInputElement : ElementRef; //Your "receiver"s public address

  //Skynet vars
  private readonly PORTAL = 'https://siasky.net/';
  private readonly DATAKEY = "myApp";
  private client;

  public publicKey : string = "";
  public privateKey : string = "";
  public receivedData : string = ""

  ngOnInit() : void {
    //Set up private and public keys (genKeyPair returns an object, so I'm accessing those values from that object)
    const random = Math.random().toString();
    this.publicKey = genKeyPairFromSeed(random).publicKey;
    this.privateKey = genKeyPairFromSeed(random).privateKey;

    //Set up skynet
    this.client = new SkynetClient(this.PORTAL);
  }

  ngAfterViewInit(): void {
    //When this component loads, fire the jsonExample function
    this.getJSONExample();
  }

  private async getJSONExample() {
    try {
      console.log("public key is: " + this.publicKey + " and datakey is " + this.DATAKEY);
      const { data, skylink } = await this.client.db.getJSON(this.publicKey, this.DATAKEY);
      this.receivedData = JSON.stringify(data.example);
      console.log("publickey: " + this.publicKey);
    } catch (error) {
      console.log(error);
    }
  }

  ////////////////////////// This function is handled entirely through angular data binding. Anything we set "receivedData" to will appear on the page in the data received section
  // private addData(_data){
  //   //This is commented out because we have access to it through databinding using "receivedData"
  //   /*var dataChecker = document.getElementById("dataAdder");
  //   if (dataChecker != null){
  //     dataChecker.value = "data recieved: " + _data.example;
  //     return;
  //   }*/

  //   //Instead, we can use databinding to do it easily
  //   this.receivedData = _data;

  //   var testData = document.createElement("input");
  //   testData.value = "data recieved: " + _data.example;
  //   testData.setAttribute("readonly","true");
  //   testData.setAttribute("id","dataAdder");
  //   document.body.appendChild(testData);
  // }


  public async sendData(){
    //Get value from input
    const  input = this.sendDataInputElement.nativeElement.value;

    //Get receivers public address
    const  reciever = this.receiverInputElement.nativeElement.value;

    const json = { example: input };
    try {
      await this.client.db.setJSON(this.privateKey, this.DATAKEY, json);
    } catch (error) {
       console.log(error);
    }
  }

  public async readData(){
    //Get value from receiver
    var reciever = this.receiverInputElement.nativeElement.value;
    var publicKey = reciever;

    //Get data
    try {
      const { data, skylink } = await this.client.db.getJSON(publicKey, this.DATAKEY);
      //addData(data) <- commented out bc I don't think this is necessary

      //Use data binding to show it on screen
      this.receivedData += JSON.stringify(data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(function(){
      this.readData();
    }, 400);
  }

}




