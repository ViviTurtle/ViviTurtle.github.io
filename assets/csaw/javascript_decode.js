var s = "Pla$ja|p$wpkt$kj$}kqv$uqawp$mw>$+gwes6451+pla}[waa[ia[vkhhmj"
var c = ""
for (i = 0; i < s.length; i++) 
{
	c += String.fromCharCode((s[i]).charCodeAt(0) ^ 0x4);
}
document.write(c)