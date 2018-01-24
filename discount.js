function transaction(form)
{
var cname=document.getElementById("CustomerName").value;
var pname=document.getElementById("ProductName").value;
var pprice=document.getElementById("ProductPrice").value;
var pquantity=document.getElementById("ProductQuantity").value;
var tprice=pprice*pquantity;
var ccountry=document.getElementById("CustomerCountry").value;
var discount;
var adiscount;
if(tprice>=10000){alert("Congratulations!..Your TotalAmount is morethan 10000rs");
if(ccountry=='USA'){
   discount=0.05*tprice;
  adiscount=tprice-discount;
  alert("CustomerName: "+cname+"\nProductName: "+pname+"\nTotalAmount: "+tprice+"\nAfterDiscount: "+adiscount+"\nCountry: "+ccountry);
}
 else if(ccountry=='India'){
   discount=0.1*tprice;
  adiscount=tprice-discount;
  alert("CustomerName: "+cname+"\nProductName: "+pname+"\nTotalAmount: "+tprice+"\nAfterDiscount: "+adiscount+"\nCountry: "+ccountry);
}
else{
alert("good");}
}
else
{
alert("CustomerName: "+cname+"\nProductName: "+pname+"\nTotalAmount: "+tprice+"\nCountry: "+ccountry);
}
}