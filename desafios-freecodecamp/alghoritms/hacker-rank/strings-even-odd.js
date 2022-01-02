/**Task
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail). */

function processData(input) {
    let arr = input.split("\n");       
    arr.forEach((word, index) => {
        if (index !== 0){
            let arrTemp = word.split("");
            const even =  arrTemp.filter((_,index)=> index % 2 === 0)
            const odd =  arrTemp.filter((_,index)=> index % 2 !== 0)
            console.log(even.join(""), odd.join(""));
        }        
    });

} 

processData(`10
ovyvzvptyvpvpxyztlrztsrztztqvrxtxuxq
holtm
uvzxrumuztyqyvpnji
tmruzxzuwoskqysxztuvosuyrswrnmtxvzsrqwytzrxpltrwusxupw
wxstwxuzuyuvyzrsxysxyuvyqxuxyskqwsyqumqrvopvowqumnvrxpwqpwsrnvrztxrxpvuxunvyzvupvupowvyzvzuzwvsrwv
yrzxrxskrtlpwpmtpxvowrxrpxq
pryumtuntmovpwvowslj
nosklrxrtyuxtmnurzsryuxtywqwqpxts
fmpszyvqwxrtvpuwqszvyvotmsxsxuvzyvpwzrpmuxqwtswvytytzsnuxuyrpvtysqoutzurqxury
jkmsxzwrxzy`)
//processData("Rank")
/*
oyzpyppytrtrttvxxx vvvtvvxzlzszzqrtuq
hlm ot
uzrmzyypj vxuutqvni
trzzwsqszuourwntvsqyzxlruxp muxuokyxtvsysrmxzrwtrptwsuw
wswuuuyrxsyvquykwyuqvpoqmvxwpsnrtrpuuvzuvpwyvuwsw xtxzyvzsyxuyxxsqsqmrovwunrpqwrvzxxvxnyvpuovzzzvrv
yzrsrlwmpvwxpq rxxktpptxorrx
pymutopvwl rutnmvwosj
nslxtutnrsyxyqqxs okrryxmuzrutwwpt
fpzvwrvuqzyomxxvypzpuqtwyyznxyptsotuquy msyqxtpwsvvtssuzvwrmxwsvttsuurvyquzrxr
jmxwxy kszrz*/