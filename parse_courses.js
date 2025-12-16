const fs = require('fs');
const html = fs.readFileSync('temp_courses.html', 'utf8');

const regex = /<div class="eael-filterable-gallery-item-wrap eael-cf-([a-zA-Z0-9-]+)".*?<img.*?src="(.*?)".*?alt="(.*?)".*?>/g;
let match;
const courses = [];

const categoryMap = {
    'marketing': 'Marketing',
    'development': 'Development',
    'designing': 'Designing',
    'design': 'Designing',
    'other': 'Other',
    'management': 'Other' // Mapping management to other as per user's prompt (tabs: Development, Marketing, Designing, Other)
};

while ((match = regex.exec(html)) !== null) {
    let categoryKey = match[1];
    let image = match[2];
    let title = match[3];

    let category = categoryMap[categoryKey] || 'Other';

    courses.push({
        title: title,
        image: image,
        category: category
    });
}

console.log(JSON.stringify(courses, null, 2));
