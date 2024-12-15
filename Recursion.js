let finalObj = {};

let user = {
    name: "Shakti",
    address:{
        home:{
            city:"Kanpur",
            state:"Uttar Pradesh"
        },
        office:{
            city:"Bengaluru",
            state:"Karnataka",
            area:{
                landmark:"Sarjapura"
            }
        }
    }
}


let recursiveFunction = (obj, parent) => {

    for(let key in obj){

        if(typeof obj[key] === 'object'){
            recursiveFunction(obj[key], parent+"_"+key);
        }
        else{
            finalObj[parent+"_"+key] = obj[key];
        }
    }
}
recursiveFunction(user,"user");

console.log(finalObj);
/*
{
  user_name: 'Shakti',
  user_address_home_city: 'Kanpur',
  user_address_home_state: 'Uttar Pradesh',
  user_address_office_city: 'Bengaluru',
  user_address_office_state: 'Karnataka',
  user_address_office_area_landmark: 'Sarjapura'
}
*/
