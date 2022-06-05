const { updateProfile } = require("../middleware/middleware")

// var country_list = ["Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria", "Bahrain", "Bangladesh", "Belgium", "Brazil", "Cameroon", "Cape Verde", "Chad", "Chile", "China", "Colombia", "Congo", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Egypt", "Ethiopia", "Finland", "France", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Lebanon", "Liberia", "Libya", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mexico", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "San Marino", "Saudi Arabia", "Senegal", "Singapore", "South Africa", "South Korea", "Spain", "Sudan", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tanzania", "Thailand", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var country_list = ["Egypt", "Sudan", "Saudi Arabia", "Syria", "Yemen"]
var type = ["case", "recovered", "death"]
var user_id = process.env.userID

exports.generateRandomData = () => {
  let diagnosis = []

  for (let i = 0; i < 1000; i++) {
    let record = {
      location: country_list[Math.floor(Math.random() * country_list.length)],
      type: type[Math.floor(Math.random() * type.length)],
    }
    diagnosis.push(record)
  }

  updateProfile(user_id, { user_metadata: { diagnosis } })
  console.log('Successfully added 1000 diagnosis!')
}