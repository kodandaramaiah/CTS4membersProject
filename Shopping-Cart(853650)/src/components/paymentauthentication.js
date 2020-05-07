var  nodefs=require('fs');
var card_num;
var card_mon;
var card_year;
var card_cvv;
var valid=false;
function checkPaymentDetails(err,  result){
    console.log('credit/debit number : ' + c_num);
    valid=false;
    for(i=0;i<result.length;i++)
    {
        console.log('****');
        if(result[i].cardnumber==card_num && result[i].mm==card_mon&&result[i].yyyy==card_year&&result[i].cvv==card_cvv)
            valid=true;
        
    }
    if(valid)
        console.log("Valid details");
    else
        console.log("Invalid details");
}

function verifyPayment(c_num,c_mon,c_year,c_cvv)
{
    card_num=c_num;
    card_mon=c_mon;
    card_year=c_year;
    card_cvv=c_cvv;
    var coll=dbobject.collection("carddetails");
    coll.find().toArray(checkPaymentDetails);
}
function Authenticate(request, response)
{
    body='';
     request.on('data', chunk => { body += chunk.toString()}); //chunk will be in json format.
    request.on('end', () => { 
    console.log('Data : ' + body); 
    var pairs = body.split('&');
    var n=pairs[0].split('=');
    var m=pairs[1].split('=');
    var y=pairs[2].split('=');
    var cv=pairs[3].split('=');
    verifyPayment(n[1],m[1],y[1],cv[1]);
    response.send('payment successful');});
    
}

function  ShowPayment(request, response)
{
    nodefs.readFile("checkout.js", function (err, data){
        var filedata=data.toString();
        response.send(filedata);
    });
}
expapp.rawListeners({"type" : "text/html"});
expapp.get("/", ShowPayment);
expapp.post("/checkout", Authenticate);
/*expapp.listen(8085, function(err)
{
    if (err)
        console.log("Error start application on 8085");
    else
        console.log("Online BookStore launched on 8085");
});*/