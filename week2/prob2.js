const fs = require('fs')
const textbook = {
    'title': 'campbell biology concepts & connections',
    'edition': 9,
    'authors': ['reece', 'taylor', 'simon', 'dickey', 'hogan', 'campbell']
};

fs.writeFileSync("textbook.json", JSON.stringify(textbook));
