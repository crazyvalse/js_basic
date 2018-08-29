/**
 * Created by codingnuts on 2018/3/2.
 */
var CryptoJS =require("crypto-js");

function encryptByDES(message, key) {

	var keyHex = CryptoJS.enc.Utf8.parse(key);
	var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return encrypted.toString();
}
function decryptByDES(ciphertext, key) {
	var keyHex = CryptoJS.enc.Utf8.parse(key);

	// direct decrypt ciphertext
	var decrypted = CryptoJS.DES.decrypt({
		ciphertext: CryptoJS.enc.Base64.parse(ciphertext)
	}, keyHex, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});

	return decrypted.toString(CryptoJS.enc.Utf8);
}


var key = "ADKFDSLKAFDKAGSAGGHDKAFD";
var value = "Founder123";

console.info(v1 = encryptByDES(value, key));
console.info(CryptoJS.enc.Hex.parse(v1))
console.info(decryptByDES(v1, key))

/*
var encrypted = CryptoJS.TripleDES.encrypt("Founder123", "ADKFDSLKAFDKAGSAGGHDKAFD");
console.info(encrypted.toString())*/
