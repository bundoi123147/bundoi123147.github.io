function showMessage(message)
{
    this.message = message;
    return this;
}
 
var blog = showMessage.call({"blog" : "freetuts.net"}, "Nguyễn Văn Cường");
console.log(blog); // blog chính là đối tượng {"blog" : "freetuts.net", "message" : "Nguyễn Văn Cường"}