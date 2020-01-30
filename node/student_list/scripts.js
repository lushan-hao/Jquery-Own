show dbs;

use users;

show collections;

db.users.find();

cls;

db;

db.users.save({name:'狗狗坏',age:25 });

db.users.remove({name:'狗狗12'});

db.users.update({name:'猫咪乖'},{name:'狗狗乖',gender:'男'});

db.users.update({name:/狗/},{contry:"狗国"})

 db.users.update({"_id" : ObjectId("5b508bfac6066bdc335f5805")},{$set:{contry:"狗国",name:"狗2"}})



 db.orders.aggregate([
   {
     $lookup:  
       {
         from: "inventory",  
         localField: "item", 
         foreignField: "sku", 
         as: "inventory_docs" 
       }
  }
]);