define([],function(){
    
    var salemanList=[
        { name:"姚明",age:31 },
        { name:"马可波罗",age:108 },
        { name:"川普",age:38 }
    ];

    return {
        getList(){
            return salemanList;
        },
        add(name,age){
            salemanList.push({name,age});
        },
        update(){

        },
        del(){

        },
    }
})