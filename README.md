@support-coaches, I need some guidance. Here is my guidance request post: Getting mixed content errors on heroku.  Tried fixing it by modifying the homeworld and species http gets.  I doubled checked both in React dev tools locally and the app deployed in heroku and it looks like all the requests are going out at https.---                                                                                                  *Link* https://star-wars-api-113.herokuapp.com/# https://github.com/ct112/star-wars-api  --- *Test Case* ``` Description: Deployed app to heroku                                                                     EXPECTATION: Expected it to be able to make https calls after I modified the URL string          ACTUAL: still seeing the same mixed content errors                                                                               *Errors Exceptions* * `/#:1 Mixed Content: The page at 'https://star-wars-api-113.herokuapp.com/#' was loaded over HTTPS, but requested an insecure XMLHttpRequest endpoint 'http://swapi.dev/api/people/?page=1'. This request has been blocked; the content must be served over HTTPS.`                                                                                                                 *Googled* * `Looked up both mixed content and heroku insecure endpoints but don't really understand enough about routing to try and implement the solutions offered.