const call = () => {
	console.log("hello")

}


const callFunction = () => {
	console.log("hello")
	setInterval(() => {
		console.log("setInterval");
		call();
	}, 1000);
}




module.exports =  {callFunction}