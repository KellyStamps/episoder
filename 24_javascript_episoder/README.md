Hey folks, here's a sample quick project to practice making requests and creating a front-end application. Below are the wireframes for how the website should look.

Functionality:
* As a user, I should be able to pick from a list of shows and see all available episodes for that show
* As a user, I should be able to select an episode from that show and see more information about that episode
* As a user, I should be able to filter the list of episodes for a show by season
* As a user, I should be able to sort the list of episodes by various qualities (run-time, air-date, ...)
* As a user, I should be able to favorite an episode and see my list of favorite episodes

The wireframes below are pretty basic, so ask if some functionality doesn't make sense. Basically, this is just an idea to jumpstart some practice for you. Here's an awesome list of some TV show APIs that you can get data from: https://github.com/jdorfman/awesome-json-datasets#tv-shows

Although the show data is external, in order to favorite an episode, you'll have to save that information to your back-end (with the show-name and the API's episode ID).

```
TELEVISION SHOW PAGE
+----------------------------------------------------------------------------------------------------------+
|  Rick and Morty ▼ (more shows)               Favorites                                                   |
|  +-----------------------------------------------------+                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |           Show image goes here here here            |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  +-----------------------------------------------------+                                                 |
|  Show title                                                                                              |
|  Show summary                                                                                            |
|                                                                                                          |
|  Season: 1, 2, 3         Sort by: Air Date, Alphabetical, Something                                      |
|  +---------------------+ +----------------------+ +-----------------------+ +---------------------+ +----+
|  |                     | |                      | |                       | |                     | |    |
|  |                     | |                      | |                       | |                     | |    |
|  |    Episode image    | |                      | |                       | |                     | |    |
|  |                     | |                      | |                       | |                     | |    |
|  |                     | |                      | |                       | |                     | |    |
|  +---------------------+ +----------------------+ +-----------------------+ +---------------------+ +----+
|  S1 E1: Episode title    S1 E2: Episode title     ...                       ...                     ...  |
|  Summary of episode...   Summary of episode he... ...                       ...                     ...  |
+----------------------------------------------------------------------------------------------------------+
```

```
EPISODE PAGE
+----------------------------------------------------------------------------------------------------------+
|                                                                                                          |
|  +-----------------------------------------------------+                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |          Episode image goes here                    |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  |                                                     |                                                 |
|  +-----------------------------------------------------+                                                 |
|  S1 E1: Episode title (favorite)           Runtime                                                       |
|  Episode summary                           Air date                                                      |
|                                                                                                          |
|  +---------------------+ +----------------------+ +-----------------------+ +---------------------+ +----+
|  |                     | |                      | |                       | |                     | |    |
|  |                     | |                      | |                       | |                     | |    |
|  |    Selected         | |                      | |                       | |                     | |    |
|  |                     | |                      | |                       | |                     | |    |
|  |                     | |                      | |                       | |                     | |    |
|  +---------------------+ +----------------------+ +-----------------------+ +---------------------+ +----+
|  S1 E1: Episode title    S1 E2: Episode title     ...                       ...                     ...  |
|  Summary of episode...   Summary of episode he... ...                       ...                     ...  |
+----------------------------------------------------------------------------------------------------------+

```
