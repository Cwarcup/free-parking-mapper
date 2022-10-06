# PayByFonie

I hate parking, especially in downtown Vancouver. 

Plan ahead and use PayByFonie to view parking details in Vancouver. You can save thousands of dollars a year by using this app! 

Check out the app here: https://paybyfonie.vercel.app/
## How to use

Enter a location in the search bar:

![Search location](public/images/demo1.gif)

Filter by average parking price:

![Filter by price](public/images/demo2.gif)

Increase the number of results:

![Increase results](public/images/demo3.gif)

Compare and find the best prices:

![Compare prices](public/images/demo4.gif)

Load more search results:

![Load more results](public/images/demo5.gif)

## Tools Used

- [React-map-gl ](https://visgl.github.io/react-map-gl/)
- [Mapbox](https://docs.mapbox.com/mapbox-gl-js/guides/)
- [React](https://reactjs.org/)
- [Vancouver Open Data](https://opendata.vancouver.ca/explore/?disjunctive.features&disjunctive.theme&disjunctive.keyword&disjunctive.data-owner&disjunctive.data-team&sort=modified)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)

## User Stories

| A user should be able to...                                          | Status | Details                                                                                                                     |
| -------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Search for a location                                                | [x]    | Uses MapBox-gl built in search functionality.                                                                               |
| View parking meters within viewport of the map                       | [X]    | Pass geo-coordinates as a polygon to Open Data Vancouver API.                                                               |
| Click on a parking meter and be provided parking details             | [x]    | Uses Marker component from React-Mapbox-gl and API response data to create and place marker in correct location             |
| Link to PayByPhone with meter number attached to clipboard           | [x]    | Unable to get access to PayByPhone API, would like to improve functionality in the future.                                  |
| Increase the number of meters/data points for a given location       | [x]    | Increases the number of items requested to Open Data Vancouver API.                                                         |
| Filter meters by price                                               | [x]    | Create average price by calculating average for morning, afternoon, evening and weekday/weekend.                            |
| View a list of all search results                                    | [x]    | List populated in sidebar. Uses map center geolocation to increase amount of relevant results, but does not work very well. |
| Heatmap of number of parking infractions for an area                 | [ ]    | Having issues limiting number of tickets to a specific geolocation. Geolocation data is not returned by API.                |
| Heatmap of population density for a given area                       | [ ]    |                                                                                                                             |
| User can save/favorite a meter and/or destination                    | [ ]    |                                                                                                                             |
| Automatically suggest a parking meter once user clicks on a location | [ ]    |                                                                                                                             |
| Add navigation functionality to a desired location                   | [ ]    |                                                                                                                             |

