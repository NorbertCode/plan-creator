# Plan Creator
A webpage written in React, which reads data about your classes from a .json file and visualises them.

## Usage
To set this up locally simply clone this repository, build `npm run build` and start the server `npm run start`.

If you want to access your plan over the internet I recommend using GitHub Pages. If this is the way you want to set you plan up:

1. Fork this repository.
2. Rename it to `{your_github_name}.github.io`, where `{your_github_name}` is your username on GitHub.
3. Go to your repository's settings -> Pages and set the source to GitHub Actions.
4. Modify `/src/app/planData.json` accordingly to fit your needs.
5. You may also edit timeStart, timeEnd and height in `/src/app/contentTable.js` to adjust the plan table. TimeStart is the hour your classes start and timeEnd when they end. Height is the table's height in pixels.

## Configuration
### Plan configuration
This is an example on what your config file might look like:
```
[
    {
        "day": 1,
        "classes": [
            {
                "name": "A",
                "timeStart": 1130,
                "timeEnd": 1315,
                "dateStart": "17.2.2025",
                "dateEnd": "17.3.2025",
                "type": "Lecture",
                "place": "s. 123"
            }
        ]
    },
    {
        "day": 2,
        "classes": [
            {
                "name": "B",
                "timeStart": 1500,
                "timeEnd": 1600,
                "dateStart": "17.1.2025",
                "dateEnd": "17.2.2025",
                "type": "Exercise",
                "place": "s. 456"
                "description": "Class on tuesday"
                "backgroundColor": "#f00";
            }
        ]
    }
]
```

The file is a list of elements, each containing: 
- `day` an integer between 0-6, where 0 represents sunday and 6 represents saturday.
- `classes` a list of elements (each representing a single class), which has multiple possible options detailed below.

#### Class required fields
- `name` the name of the class, shown on the class block. Simple text.
- `timeStart`, `timeEnd` integers, which represent hours the class starts and ends. For example 1130 means 11:30. Do not actually put a colon in the middle. They are the hours the class starts and ends.
- `dateStart`, `dateEnd` strings in format DD.MM.YYYY. If you only want one day, simply set both to the same value. Classes will only be visible if a date is between these two values.

#### Class optional fields
- `type` the type of the class, shown on the class block. Simple text.
- `place` where your class takes place, shown on the class block. Simple text.
- `description` a description of your class. If it fits it'll be visible on the class block. Otherwise you'll have to click on it to view the entirety. You can use html tags to customize the apperance.
- `backgroundColor` color of this specific class block. Represented by a string, which can be any value CSS supports. For example you can simply type "red" or use a hex code like "#ff0000".

### Override configuration
The override system provides a simple way to modify groups of classes based on their attributes. For example you can make all classes of a certain type have a different color. Here is an example config:
```
[
    {
        "filterKey": "type",
        "filterValue": "1",
        "overrideKey": "name",
        "overrideValue": "Z"
    },
    {
        "filterKey": "name",
        "filterValue": "A",
        "overrideKey": "backgroundColor",
        "overrideValue": "#f00"
    }
]
```
It's a list of elements, each containing four required keys:
- `filterKey` the attribute key (from classes configuration) to be filtered by.
- `filterValue` the value which the above key has to have to be filtered.
- `overrideKey` the key of the attribute to override.
- `overrideValue` the new value of the above key.

In the provided example config the first element takes all classes where the type is "1" and changes their names to "Z".
The second element takes all classes where the name is "A" and overrides their background color to "#f00".