const fs = require("fs");

const data = [
  {
    fullName: "Sita Sharma",
    address: "Kathmandu, Nepal",
    email: "sitasharma@example.com",
    phoneNumber: "9812345678",
  },
  {
    fullName: "Ram Bahadur Thapa",
    address: "Pokhara, Nepal",
    email: "ramthapa@example.com",
    phoneNumber: "9823456789",
  },
  {
    fullName: "Gita Rijal",
    address: "Biratnagar, Nepal",
    email: "gitarijal@example.com",
    phoneNumber: "9712345678",
  },
  {
    fullName: "Hari Prasad Shrestha",
    address: "Lalitpur, Nepal",
    email: "harishrestha@example.com",
    phoneNumber: "9723456789",
  },
  {
    fullName: "Maya Gurung",
    address: "Bhaktapur, Nepal",
    email: "mayagurung@example.com",
    phoneNumber: "9819876543",
  },
];

const str_data = JSON.stringify(data);
const filePath = "./users_data.json";
//read and write file using fs
fs.writeFileSync(filePath, str_data);

const dataRead = fs.readFileSync(filePath,{encoding:"utf-8"});
const arrayData = JSON.parse(dataRead)
console.log(arrayData)


//creating folder if it doesnot exists

const path = "./uploads/images"
if(!fs.existsSync(path)){
  fs.mkdirSync(path,{recursive:true})
}