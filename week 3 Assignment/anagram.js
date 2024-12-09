function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    let temp1 = str1.toLowerCase().split('').join('');
    let temp2 = str2.toLowerCase().split('').join('');

    return temp1==temp2;

}

function main(){
    let s1 = "pisten to me";
    let s2 = "enlist to ke";
    console.log(isAnagram(s1, s2));
}

main();