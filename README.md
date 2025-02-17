# Plan Creator
A webpage written in React, which reads data about your classes from a .json file and visualises them.

## Usage
To set this up locally simply clone this repository, build `npm run build` and start the server `npm run start`.

If you want to access your plan over the internet I recommend using GitHub Pages. If this is the way you want to set you plan up:

1. Fork this repository.
2. Rename it to `{your_github_name}.github.io`, where `{your_github_name}` is your username on GitHub.
3. Go to your repository's settings -> Pages and set the source to GitHub Actions.
4. Modify `/src/app/planData.json` accordingly to fit your needs.
5. You may also edit timeStart, timeEnd and height in `/src/app/page.js` to adjust the plan table. TimeStart is the hour your classes start and timeEnd when they end. Height is the table's height in pixels.

## Modifying the plan
This is a shortened version of the plan which is included by default:
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
                "type": "Wykład",
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
                "type": "Ćwiczenia",
                "place": "s. 456"
            }
        ]
    }
]
```

Some explanations:

- `"day"` is an integer between 0-6, where 0 represents sunday and 6 represents Saturday.
- `"timeStart"` and `timeEnd` are integers, which represent hours. For example 1130 means 11:30. Do not actually put a colon in the middle. They are the hours the class starts and ends.
- `dateStart` and `dateEnd` are strings in format DD.MM.YYYY. If you only want one day, simply set both to the same value. Classes will only be visible if a date is between these two values.
- `name`, `type` and `place` are just strings, which are visible on class blocks.
